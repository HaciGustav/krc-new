import { useEffect } from "react";
import { supabase } from "@/lib/supabaseClient";

export default function useFormPrefill(setFormData) {
  useEffect(() => {
    const fetchCompanyData = async () => {
      try {
        // 1. Richtige Supabase-Methode, um den User zu holen
        const { data: { user }, error: userError } = await supabase.auth.getUser();
        
        if (userError || !user) {
          console.log("Kein User gefunden.");
          return;
        }

        const userEmail = user.email;
        console.log("Eingeloggte E-Mail:", userEmail);

        // 2. Daten abfragen
        const { data: companyData, error: dbError } = await supabase
          .from("USER") 
          .select("employer, work_address, company_mail") 
          .eq("user_email", userEmail)
          .single(); 

        if (dbError) {
          console.error("Fehler beim Laden (Checke RLS in Supabase!):", dbError.message);
          return;
        }

        if (companyData) {
          console.log("Daten erfolgreich geladen:", companyData);
          
          setFormData((prev) => ({
            ...prev,
            employer: companyData.employer || "",         
            workAddress: companyData.work_address || "",
            email: companyData.company_mail || "",      
          }));
        }
      } catch (err) {
        console.error("Unerwarteter Fehler beim Formular-Prefill:", err);
      }
    };

    fetchCompanyData();
  }, [setFormData]);
}