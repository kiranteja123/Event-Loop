/* eslint-disable react/prop-types -- internal shared control */

/** Shared search field only (debounced filtering via `useQaSearch`). */
export default function TechStackSearchFilter({ value, onChange, ariaLabel }) {
    return (
        <div className="input-group searchFilterInput">
            <input
                type="text"
                className="form-control"
                placeholder="Search questions and answers..."
                value={value}
                onChange={onChange}
                aria-label={ariaLabel}
            />
        </div>
    );
}
