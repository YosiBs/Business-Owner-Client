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
        <StyledTableCell align="left">
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
        <StyledTableCell align="left">
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
        <StyledTableCell align="left">
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
        <StyledTableCell align="left">
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
  switch (form.type) {
    case constants.FORM_TYPE.TAX_INVOICE:
      return (
        <StyledTableCell align="center">
          <PDFDownloadLink
            document={<PDFTaxInvoiceFile taxInvoice={form} />}
            fileName={`Tax Invoice - ${form.dateCreated}`}
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
        <StyledTableCell align="right">
          <PDFDownloadLink
            document={<PDFQuotationFile quotation={form} />}
            fileName={`Quotation - ${form.dateCreated}`}
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
        <StyledTableCell align="right">
          <PDFDownloadLink
            document={<PDFReceiptFile receipt={form} />}
            fileName={`Receipt - ${form.dateCreated}`}
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
        <StyledTableCell align="right">
          <PDFDownloadLink
            document={<PDFDeliveryNoteFile deliveryNote={form} />}
            fileName={`Delivery Note - ${form.dateCreated}`}
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
        <StyledTableCell align="right">No action available</StyledTableCell>
      );
  }
};

export default function CustomizedTables(props) {
  console.log("@@ " + props.customerEmail);

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
          {cus.customers1[0].forms.map((form) => (
            <StyledTableRow key={form.id}>
              {renderFormType(form.type)}
              <StyledTableCell align="center">
                {form.createDate}
              </StyledTableCell>
              <StyledTableCell align="center">
                {`${cus.customers1[0].firstName} ${cus.customers1[0].lastName}`}
              </StyledTableCell>
              <StyledTableCell align="center">
                {form.isOpen ? <LockOpenOutlinedIcon /> : <LockOutlinedIcon />}
              </StyledTableCell>
              {renderFormAction(form)}
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
