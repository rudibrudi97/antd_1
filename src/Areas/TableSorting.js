import React from "react"

const sortTypes_1 = {
    up:{
        class: "sort-up",
        fn:(a,b) => a.name - b.name
    },
    down: {
        class: "sort-down",
        fn:(a,b) => b.name - a.name
    },
    default: {
        class: "sort",
        fn: (a) => a
    }
}

const sortTypes_2 = {
    up:{
        class: "sort-up",
        fn:(a,b) => a.license - b.license
    },
    down: {
        class: "sort-down",
        fn:(a,b) => b.license - a.license
    },
    default: {
        class: "sort",
        fn: (a) => a
    }
}

class TableSorting extends React.Component {
    state = {
        currentSort: "default"
    }

    onSortChange = () => {
        const {currentSort} = this.state;
        let nextSort;

        if(currentSort === "down") nextSort = "up";
        else if(currentSort === "up") nextSort = "default"
        else if (currentSort === "default") nextSort = "down"

        this.setState({
            currentSort: nextSort
        })
    }

    render() {
        const {data} = this.props;
        const {currentSort} = this.state;

        return(
                <table className="text-left">
                    <thead>
                    <tr>
                        <th>Name Algorithm</th>
                        <th>License Module <button onClick={this.onSortChange}>
                            <i className="fas fa-${sortTypes[currentSort].class"/>
                        </button></th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        [...data].sort(sortTypes_1[currentSort].fn) &&
                        [...data].sort(sortTypes_2[currentSort].fn).map( p => (
                        <tr>
                            <td>{p.name}</td>
                            <td>{p.license}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>

        );
    }
}

export default TableSorting