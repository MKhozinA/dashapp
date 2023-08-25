import { Card, Skeleton, Stack, Title } from "@mantine/core";
import { DashboardLayout } from "./Home";
import { useQuery } from "@tanstack/react-query";

type Pet = {
    id:string;
    name:string;
    owner:string;
    breed:string;
}

// bikin fungsi getPet yang mengembalikan Promise<Pet[]>
const getPet = async () => {
    const response = await fetch ("https://61dafe364593510017aff75e.mockapi.io/api/v1/pets");
    const data = await response.json();
    // sleep for 1 second, simulasi internet lemot
    // await new Promise((resolve) => setTimeout(resolve, 1000));
    return data as Pet[];
}

function PetList(){
    const { data } = useQuery<Pet[], Error>(["pets"], getPet);
    if (!data){
        return(
            <Stack>
                {[1, 2, 3, 4].map((i) => 
                (<Card key={i} mih={100}>
                    <Stack>
                        <Skeleton height={24} w="50%"/>
                        <Skeleton height={20}/>
                        <Skeleton height={20}/>
                    </Stack>
                </Card>))}
            </Stack>
        )
    }

    return (
        <Stack>
            {
                data.map((pet) => (
                    <Card key={pet.id} mih={100}>
                        <Title>{pet.name}</Title>
                        <Title>{pet.owner}</Title>
                        <Title>{pet.breed}</Title>
                    </Card>

                )
               
                )
            }
        </Stack>
    )
}
export default function JobsPage() {
    return <DashboardLayout>
        <h1>Jobs</h1>
        <PetList/>
    </DashboardLayout>
}