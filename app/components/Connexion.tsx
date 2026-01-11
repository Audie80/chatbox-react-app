'use client';

export default function Connexion() {
    return (
        <div className="d-flex align-items-center vh-100">
            <div className="container-sm text-center">
                <div className="row justify-content-center">
                <form className="col-md-auto">
                    <div className="mb-3">
                        <label htmlFor="pseudo" className="form-label">Entrez votre pseudo</label>
                        <input type="text" name="pseudo" id="pseudo" required className="form-control" />
                    </div>
                    <button type="submit" className="btn btn-primary">GO</button>
                </form>
                </div>
            </div>
        </div>
    );
}
