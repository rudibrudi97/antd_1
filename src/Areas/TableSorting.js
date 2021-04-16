import React, {useState} from "react"
import {Table} from "antd";
import tableData from "./tableData";

const columns = [
    {
        title: "Name Algorithm",
        dataIndex: "name",
        sorter: {
            compare: (a,b) => a.name - b.name,
            multiple: 1,
        },
    },
    {
        title: "License Modul",
        dataIndex: "license",
        sorter: {
            compare: (a,b) => a.license - b.license,
            multiple: 1,
        }
    }
];
const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
        console.log("selectedRowKeys: ${selectedRowKeys}", "selectedRows: ", selectedRows)
    }
};

const TableSorting = () => {
    const [selectionType, setSelectionType] = useState("checkbox")
        return(
            <div>
                <Table
                    rowSelection={{type: selectionType, ...rowSelection}}
                    columns={columns} dataSource={tableData} scroll={{y:150}}/>
            </div>
        )
}

export default TableSorting