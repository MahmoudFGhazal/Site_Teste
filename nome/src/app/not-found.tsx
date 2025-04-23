import Link from "next/link";

export default function NotFound(){
    const divStyle: React.CSSProperties = {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
    };

    const h1Style: React.CSSProperties = {
        fontWeight: "bold",
        fontSize: "3rem",
        margin: "1rem",
    };

    const linkStyle: React.CSSProperties = {
        color: "blue",
        fontSize: "1.125rem",
        cursor: "pointer",
    };

    return(
        <div style={divStyle}>
            <h1 style={h1Style}>Página 404 não encontrada!</h1>
            <p>Essa página que tentou acessar não existe!</p>

            <Link href='/' style={linkStyle}>
                Voltar para Home
            </Link>
        </div>
    )
}