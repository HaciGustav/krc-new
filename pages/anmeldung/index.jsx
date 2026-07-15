import NewRegistry from "@/components/forms/NewRegistry";
import ProtectedRoute from "@/components/ProtectedRoute"; 

const Anmeldung = () => {
  return <NewRegistry />;
};



export default function ProtectedAnmeldung() {
  return (
    <ProtectedRoute>
      <Anmeldung />
    </ProtectedRoute>
  );
}