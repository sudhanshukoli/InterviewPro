export default function CommonLoader(){

    return(<>
            <div style={{ minHeight: "100vh", background: "#0A0A0F", display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column", gap: 24 }}>
            <style>{`@keyframes spin{to{transform:rotate(360deg)}} @keyframes pulse{0%,100%{opacity:1}50%{opacity:0.4}}`}</style>
            <div style={{ width: 56, height: 56, border: "3px solid rgba(28, 32, 176,0.2)", borderTopColor: "#5256f2", borderRadius: "50%", animation: "spin 1s linear infinite" }} />
            </div>
        </>)

}