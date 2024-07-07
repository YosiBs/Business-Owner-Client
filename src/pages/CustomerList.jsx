import React from "react";
import LayoutComponent from "../components/LayoutComponent";
import TableCustomerList from "../components/TableCustomersList";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import AddIcon from "@mui/icons-material/Add";
import BasicTable from "../components/BasicTable";

const CustomerList = () => {
  return (
    <LayoutComponent>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "10px",
        }}
      >
        <h1
          style={{
            fontSize: "30px",
            color: "black",
            textAlign: "left",
            marginTop: "30px",
            fontWeight: "bold",
            marginBottom: 0,
          }}
        >
          Customer list
        </h1>

        <Link to="/AddNewCustomer">
          <AddIcon
            fontSize="large"
            style={{ color: "#007bff", cursor: "pointer" }}
          />
        </Link>
      </div>
      <BasicTable />
    </LayoutComponent>
  );
};

export default CustomerList;
