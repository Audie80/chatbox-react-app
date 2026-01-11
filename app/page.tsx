'use client';

import { redirect } from "next/navigation";
import { useState } from "react";

export default function Page() {

  const [pseudo, setPseudo] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    redirect(`/chatbox/${pseudo}`)
  }

    return (
          <div className="container-sm text-center">
              <div className="row justify-content-center">
              <form className="col-md-auto" onSubmit={handleSubmit}>
                  <div className="mb-3">
                      <label htmlFor="pseudo" className="form-label">Entrez votre pseudo</label>
                      <input value={pseudo} onChange={(e) => setPseudo(e.target.value)} type="text" name="pseudo" id="pseudo" required className="form-control" />
                  </div>
                  <button type="submit" className="btn btn-primary">GO</button>
              </form>
              </div>
          </div>
    );
}
