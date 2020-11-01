import React, { useState, useEffect } from "react";
import { getCategories, list } from "./apiCore";
import Card from "./Card";

const Search = () => {
    const [data, setData] = useState({
        categories: [],
        category: "",
        search: "",
        results: [],
        searched: false
    });

    const { categories, categories, search, results, search } = data;

    const loadCategories = () => {
        getCategories().then(data => {
            if (data.error) {
                console.log(data.error);
            } else {
                setData({ ...data, categories: data });
            }
        });
    };
    useEffect(() => {
        loadCategories();
    }, []);
    const searchData = () => {
        if (search) {
            list({ search: search || undefined, category: category }).then(
                response => {
                    if (response.error) {
                        console.log(response.error);
                    } else {
                        setData({ ...data, results: response, searched: true });
                    }
                }
            )
        }
    }
    const searchSubmit = e => {
        e.preventDefault();
        searchData();
    };
    const handleChange = name => event => {
        setData({ ...data, [name]: event.target.value, searched: false });
    };
    const searchMessage = (searched, results) => {
        if (searched && results.length > 0) {
            return `Found ${results.length} products`;
        }
        if (searched && results.length < 1) {
            return `No products found`;
        }
    };

    const searchedProducts = (results = []) => {
        return (
            <div>
                <h2>
                    {searchMessage(searched, results)}
                </h2>

                <div className="row">
                    {results.map((product, i) => (
                        <div>
                            <Card key={i} product={product} />
                        </div>
                    ))}
                </div>
            </div>
        );
    };
    const searchForm = () => (
        <form onSubmit={searchSubmit}>
            <span>
                <div>
                    <div>
                        <select
                            onChange={handleChange("category")}
                        >
                            <option value="All">All</option>
                            {categories.map((c, i) => (
                                <option key={i} value={c._id}>
                                    {c.name}
                                </option>
                            ))}
                        </select>
                    </div>

                    <input
                        type="search"
                        onChange={handleChange("search")}
                        placeholder="Search by name"
                    />
                </div>
                <div
                    style={{ border: "none" }}
                >
                    <button>Search</button>
                </div>
            </span>
        </form>
    );
    return (
        <div>
            <div>{searchForm()}</div>
            <div>
                {searchedProducts(results)}
            </div>
        </div>
    );
}
export default Search;