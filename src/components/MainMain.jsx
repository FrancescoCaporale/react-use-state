import languages from "./data/languages"
import { useState } from "react"

function MainMain() {
    const [selectedLanguage, setselectedLanguage] = useState(languages[0]);
    return (
        <main>
            <div className="buttons">
                {languages.map((lang) => (
                    <button key={lang.id}
                        onClick={() => setselectedLanguage(lang)} >
                        {lang.title}
                    </button>
                ))
                }
            </div>
            <div className="card">
                <h2>{selectedLanguage.title}</h2>
                <p>{selectedLanguage.description}</p>
            </div>
        </main>
    )
}
export default MainMain