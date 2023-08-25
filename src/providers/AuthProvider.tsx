import { supabase } from "../supabase";
import { Session, User } from "@supabase/supabase-js";
import {
	PropsWithChildren,
	createContext,
	useContext,
	useEffect,
	useState,
} from "react";

type Profile = {
	username: string | null;
	website: string | null;
	avatar_url: string | null;
};
// create a context for authentication
const AuthContext = createContext<{
	session: Session | null | undefined;
	user: User | null | undefined;
	profile: Profile | null | undefined;
	signOut: () => void;
}>({ session: null, user: null, profile: null, signOut: () => {} });

export const AuthProvider = ({ children }: PropsWithChildren) => {
	const [user, setUser] = useState<User>();
	const [session, setSession] = useState<Session | null>();
	const [loading, setLoading] = useState(true);
	const [profile, setProfile] = useState<Profile | null>(null);

	useEffect(() => {
		async function getProfile() {
			if (!user) return;
			setLoading(true);
			const { data, error } = await supabase
				.from("profiles")
				.select("username, website, avatar_url")
				.eq("id", user.id)
				.single();

			if (error) {
				console.warn(error);
			} else if (data) {
				setProfile(data as Profile);
			}

			setLoading(false);
		}

		getProfile();
	}, [session]);

	useEffect(() => {
		const setData = async () => {
			const {
				data: { session },
				error,
			} = await supabase.auth.getSession();
			if (error) throw error;
			setSession(session);
			setUser(session?.user);
			setLoading(false);
		};

		const { data: listener } = supabase.auth.onAuthStateChange(
			(_event, session) => {
				setSession(session);
				setUser(session?.user);
				setLoading(false);
			},
		);

		setData();

		return () => {
			listener?.subscription.unsubscribe();
		};
	}, []);

	const value = {
		session,
		user,
		profile,
		signOut: () => supabase.auth.signOut(),
	};

	return (
		<AuthContext.Provider value={value}>
			{!loading && children}
		</AuthContext.Provider>
	);
};

// export the useAuth hook
export const useAuth = () => {
	return useContext(AuthContext);
};