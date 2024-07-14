import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { PDFDownloadLink } from "@react-pdf/renderer";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import PDFQuotationFile from "../components/PDFQuotationFile";
import PDFReceiptFile from "../components/PDFReceiptFile";
import PDFTaxInvoiceFile from "../components/PDFTaxInvoiceFile";
import PDFDeliveryNoteFile from "../components/PDFDeliveryNoteFile";
import IconButton from "@mui/material/IconButton";
import Chip from "@mui/joy/Chip";
import * as constants from "../utils/constants";
import * as cus from "../../data/customers";
import LockOpenOutlinedIcon from "@mui/icons-material/LockOpenOutlined";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import FeedOutlinedIcon from "@mui/icons-material/FeedOutlined";
import Cookies from "js-cookie";

/*
  This component is a Table for the Form List display
*/

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));
const renderFormType = (type) => {
  // a function for the form type
  switch (type) {
    case constants.FORM_TYPE.TAX_INVOICE:
      return (
        <StyledTableCell align="center">
          <Chip
            color="warning"
            disabled={false}
            onClick={function () {}}
            size="lg"
            variant="solid"
          >
            {constants.FORM_TYPE.TAX_INVOICE}
          </Chip>
        </StyledTableCell>
      );
    case constants.FORM_TYPE.QUOTE:
      return (
        <StyledTableCell align="center">
          <Chip
            icon={<FeedOutlinedIcon />}
            color="primary"
            disabled={false}
            onClick={function () {}}
            size="lg"
            variant="solid"
          >
            {constants.FORM_TYPE.QUOTE}
          </Chip>
        </StyledTableCell>
      );
    case constants.FORM_TYPE.RECEIPT:
      return (
        <StyledTableCell align="center">
          <Chip
            color="neutral"
            disabled={false}
            onClick={function () {}}
            size="lg"
            variant="solid"
          >
            {constants.FORM_TYPE.RECEIPT}
          </Chip>
        </StyledTableCell>
      );

    case constants.FORM_TYPE.DELIVERY_NOTE:
      return (
        <StyledTableCell align="center">
          <Chip
            color="danger"
            disabled={false}
            onClick={function () {}}
            size="lg"
            variant="solid"
          >
            {constants.FORM_TYPE.DELIVERY_NOTE}
          </Chip>
        </StyledTableCell>
      );
    case constants.FORM_TYPE.RECEIPT_TAX_INVOICE:
      return (
        <StyledTableCell align="center">
          <Chip
            color="success"
            disabled={false}
            onClick={function () {}}
            size="lg"
            variant="solid"
          >
            {constants.FORM_TYPE.RECEIPT_TAX_INVOICE}
          </Chip>
        </StyledTableCell>
      );
    default:
      return (
        <StyledTableCell align="right">No action available</StyledTableCell>
      );
  }
};

const renderFormAction = (form) => {
  switch (form.alias) {
    case constants.FORM_TYPE.TAX_INVOICE:
      return (
        <StyledTableCell align="center">
          <PDFDownloadLink
            document={<PDFTaxInvoiceFile formObject={form} />}
            fileName={`Tax Invoice - `}
          >
            {({ loading }) =>
              loading ? (
                <IconButton
                  disabled
                  aria-label="download file"
                  size="small"
                  color="primary"
                >
                  <FileDownloadIcon fontSize="small" />
                </IconButton>
              ) : (
                <IconButton
                  aria-label="download file"
                  size="small"
                  color="primary"
                >
                  <FileDownloadIcon fontSize="small" />
                </IconButton>
              )
            }
          </PDFDownloadLink>
        </StyledTableCell>
      );
    case constants.FORM_TYPE.QUOTE:
      return (
        <StyledTableCell align="center">
          <PDFDownloadLink
            document={<PDFQuotationFile quotation={form.objectDetails} />}
            fileName={`Quotation - ${form.creationTimestamp}`}
          >
            {({ loading }) =>
              loading ? (
                <IconButton
                  disabled
                  aria-label="download file"
                  size="small"
                  color="primary"
                >
                  <FileDownloadIcon fontSize="small" />
                </IconButton>
              ) : (
                <IconButton
                  aria-label="download file"
                  size="small"
                  color="primary"
                >
                  <FileDownloadIcon fontSize="small" />
                </IconButton>
              )
            }
          </PDFDownloadLink>
        </StyledTableCell>
      );
    case constants.FORM_TYPE.RECEIPT:
      return (
        <StyledTableCell align="center">
          <PDFDownloadLink
            document={<PDFReceiptFile receipt={form.objectDetails} />}
            fileName={`Receipt - ${form.creationTimestamp}`}
          >
            {({ loading }) =>
              loading ? (
                <IconButton
                  disabled
                  aria-label="download file"
                  size="small"
                  color="primary"
                >
                  <FileDownloadIcon fontSize="small" />
                </IconButton>
              ) : (
                <IconButton
                  aria-label="download file"
                  size="small"
                  color="primary"
                >
                  <FileDownloadIcon fontSize="small" />
                </IconButton>
              )
            }
          </PDFDownloadLink>
        </StyledTableCell>
      );

    case constants.FORM_TYPE.DELIVERY_NOTE:
      return (
        <StyledTableCell align="center">
          <PDFDownloadLink
            document={<PDFDeliveryNoteFile deliveryNote={form.objectDetails} />}
            fileName={`Delivery Note - ${form.creationTimestamp}`}
          >
            {({ loading }) =>
              loading ? (
                <IconButton
                  disabled
                  aria-label="download file"
                  size="small"
                  color="primary"
                >
                  <FileDownloadIcon fontSize="small" />
                </IconButton>
              ) : (
                <IconButton
                  aria-label="download file"
                  size="small"
                  color="primary"
                >
                  <FileDownloadIcon fontSize="small" />
                </IconButton>
              )
            }
          </PDFDownloadLink>
        </StyledTableCell>
      );
    default:
      return (
        <StyledTableCell align="center">No action available</StyledTableCell>
      );
  }
};

export default function CustomizedTables(props) {
  /*
    make a get request for customer (Get Customer-Object By Email)
  */

  /*
    make a get request for all the forms (Get All Form-Objects By Customer)
  */
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell align="center">Form Type</StyledTableCell>
            <StyledTableCell align="center">Date Modified</StyledTableCell>
            <StyledTableCell align="center">Customer</StyledTableCell>
            <StyledTableCell align="center">Open/Close</StyledTableCell>
            <StyledTableCell align="center"></StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {/* Reaplace cus.customers1[0] To Data.forms */}
          {props.formArray.map((form) => (
            <StyledTableRow key={form.objectId.id}>
              {renderFormType(form.alias)}
              <StyledTableCell align="center">
                {form.creationTimestamp}
              </StyledTableCell>
              <StyledTableCell align="center">
                {form.objectDetails.customer}
              </StyledTableCell>
              <StyledTableCell align="center">
                {form.objectDetails.isOpen ? (
                  <LockOpenOutlinedIcon />
                ) : (
                  <LockOutlinedIcon />
                )}
              </StyledTableCell>
              {renderFormAction(form)}
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
