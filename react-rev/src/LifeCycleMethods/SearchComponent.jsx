import React, { useState, useEffect } from 'react';

// Simulate an API call
const fetchSearchResults = async (query) => {
    console.log(`Fetching results for: ${query}`);
    // Simulating a delay like fetching from an API
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve([`Result 1 for ${query}`, `Result 2 for ${query}`, `Result 3 for ${query}`]);
        }, 1000);
    });
};

const SearchComponent = () => {
    const [query, setQuery] = useState(''); // Search query state
    const [results, setResults] = useState([]); // Search results state
    const [loading, setLoading] = useState(false); // Loading state

    // Mounting: Fetch results when the component mounts or when the query changes
    useEffect(() => {
        if (!query) return; // Do nothing if query is empty
        setLoading(true); // Start loading when query is being fetched

        // Fetch the search results
        fetchSearchResults(query)
            .then((data) => {
                setResults(data); // Set results once data is fetched
                setLoading(false); // Stop loading
            })
            .catch(() => {
                setLoading(false); // Stop loading on error
            });

        // Updating: Cleanup or cancel previous request when query changes
        return () => {
            setLoading(false); // Reset loading if the component is updated
            console.log('Cleanup previous request');
        };
    }, [query]); // Dependency on query, triggers on change

    // Unmounting: Cleanup when the component unmounts (e.g., clear timers or cancel requests)
    useEffect(() => {
        return () => {
            console.log('Component unmounted, cleaning up...');
            // Additional cleanup tasks like canceling API requests or timers can be done here
        };
    }, []); // Empty array ensures this runs only when the component unmounts

    // Handle input change
    const handleChange = (event) => {
        setQuery(event.target.value);
    };

    return (
        <div>
            <h1>Search Results</h1>
            <input
                type="text"
                placeholder="Search..."
                value={query}
                onChange={handleChange}
                disabled={loading}
            />
            {loading && <p>Loading...</p>}
            <ul>
                {results.map((result, index) => (
                    <li key={index}>{result}</li>
                ))}
            </ul>
        </div>
    );
};

export default SearchComponent;
