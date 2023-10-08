import { useQuery } from "@tanstack/react-query";
import { getAllAlumni } from "../../repository/Alumni";

export function AdminDataAlumniPage() {
    const { data, isLoading, error } = useQuery(["alumni", "all"], () => getAllAlumni())

    if (isLoading) return (
        <div>Memuat...</div>
    )

    if (error) {
        return <>Terjadi kesalahan</>
    }

    return (
        <div>
            <h1>Data Alumni</h1>
            {JSON.stringify(data, null, 2)}
        </div>
    );
}