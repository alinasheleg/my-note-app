import Link from "next/link";

export default function WelcomeBanner() {
  return (
    <div className="text-center py-5 px-3 rounded-4" style={{
      background: 'linear-gradient(135deg, #6a11cb 0%, #2575fc 100%)',
      color: 'white',
      boxShadow: '0 8px 20px rgba(37, 117, 252, 0.4)'
    }}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="64"
        height="64"
        fill="currentColor"
        className="bi bi-journal-check mb-3"
        viewBox="0 0 16 16"
        style={{ filter: 'drop-shadow(0 1px 2px rgba(0,0,0,0.3))' }}
      >
        <path d="M10.854 6.146a.5.5 0 0 0-.708 0L7.5 8.793 6.354 7.646a.5.5 0 1 0-.708.708l1.5 1.5a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0 0-.708z"/>
        <path d="M3 1h10a1 1 0 0 1 1 1v11a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zm0 1v11h10V2H3z"/>
      </svg>
      <h1 className="mb-3" style={{ textShadow: '2px 2px 5px rgba(0,0,0,0.3)' }}>
        Добро пожаловать в Заметки!
      </h1>
      <p className="lead mb-4" style={{ fontWeight: '500' }}>
        Ваши идеи — всегда под рукой.
      </p>
      
      <Link href="/add-note" className="btn btn-light btn-lg" style={{ fontWeight: "600", color: "#2575fc" }}>
  Добавить заметку
</Link>

    </div>
  );
}
