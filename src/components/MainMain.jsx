import languages from "./data/languages"
function MainMain() {
    return (
        <main>
            <div className="buttons">
                {languages.map((lang) => (
                    <button key={lang.id}>
                        {lang.title}
                    </button>
                ))}
            </div>
        </main>
    )
}

export default MainMain