import { useState, useEffect } from "react";
import vueData from './data/Vue';
import { useQaSearch } from './useQaSearch';
import TechStackSearchFilter from './TechStackSearchFilter';
import './techStack.css';
import Prism from 'prismjs';
import 'prismjs/themes/prism.css';

function Vue() {
    const [openItem, setOpenItem] = useState(null);
    const vueList = vueData;
    const { searchInput, setSearchInput, debouncedSearch, filteredList } = useQaSearch(vueList);

    useEffect(() => {
        if (openItem != null && !filteredList.some((i) => i.id === openItem)) {
            setOpenItem(null);
        }
    }, [filteredList, openItem]);

    useEffect(() => {
        Prism.highlightAll();
    }, [filteredList, openItem]);

    const toggleAccordion = (id) => {
        setOpenItem(openItem === id ? null : id);
    };

    return (
        <div className="container">
            <TechStackSearchFilter
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
                ariaLabel="Search Vue Q&A"
            />
            <div className="accordion" id="accordionExample">
                {filteredList?.map((ele) => (
                    <div className="accordion-item" key={ele.id}>
                        <h2 className="accordion-header" id={`heading-${ele.id}`}>
                            <button
                                className={`accordion-button ${openItem === ele.id ? '' : 'collapsed'}`}
                                type="button"
                                onClick={() => toggleAccordion(ele.id)}
                                aria-expanded={openItem === ele.id ? 'true' : 'false'}
                                aria-controls={`collapse-${ele.id}`}
                            >
                                #{ele.id} - {ele.question}
                            </button>
                        </h2>
                        <div
                            id={`collapse-${ele.id}`}
                            className={`accordion-collapse collapse ${openItem === ele.id ? 'show' : ''}`}
                            aria-labelledby={`heading-${ele.id}`}
                            data-bs-parent="#accordionExample"
                        >
                            {ele.code ? (
                                <div className="accordion-body">
                                    <pre>
                                        <code className="language-javascript">
                                            {ele.answer}
                                        </code>
                                    </pre>
                                </div>
                            ) : (
                                <div className="accordion-body">
                                    <ul>
                                        <li>
                                            {ele.answer}
                                        </li>
                                    </ul>
                                </div>
                            )}
                        </div>
                    </div>
                ))}
            </div>
            {filteredList.length === 0 && debouncedSearch.trim() !== '' && (
                <p className="text-muted mt-3">No questions match your search.</p>
            )}
        </div>
    );
}

export default Vue;
