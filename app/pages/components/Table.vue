<script setup lang="ts">
/* eslint-disable no-useless-escape */
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/table"
import { CodeBlock, ComponentHeading } from "@app/components"

const invoices = [
  {
    invoice: "INV001",
    paymentStatus: "Paid",
    totalAmount: "$250.00",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV002",
    paymentStatus: "Pending",
    totalAmount: "$150.00",
    paymentMethod: "PayPal",
  },
  {
    invoice: "INV003",
    paymentStatus: "Unpaid",
    totalAmount: "$350.00",
    paymentMethod: "Bank Transfer",
  },
  {
    invoice: "INV004",
    paymentStatus: "Paid",
    totalAmount: "$450.00",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV005",
    paymentStatus: "Paid",
    totalAmount: "$550.00",
    paymentMethod: "PayPal",
  },
  {
    invoice: "INV006",
    paymentStatus: "Pending",
    totalAmount: "$200.00",
    paymentMethod: "Bank Transfer",
  },
  {
    invoice: "INV007",
    paymentStatus: "Unpaid",
    totalAmount: "$300.00",
    paymentMethod: "Credit Card",
  },
]

const code = `<script setup lang="ts">
import {
  Table, TableBody, TableCaption, TableCell,
  TableHead, TableHeader, TableRow,
} from '@codinglabsau/gooey'

const invoices = [
  { invoice: 'INV001', status: 'Paid', amount: '$250.00', method: 'Credit Card' },
  { invoice: 'INV002', status: 'Pending', amount: '$150.00', method: 'PayPal' },
]
<\/script>

<template>
  <Table>
    <TableCaption>A list of your recent invoices.</TableCaption>
    <TableHeader>
      <TableRow>
        <TableHead>Invoice</TableHead>
        <TableHead>Status</TableHead>
        <TableHead>Method</TableHead>
        <TableHead class="text-right">Amount</TableHead>
      </TableRow>
    </TableHeader>
    <TableBody>
      <TableRow v-for="invoice in invoices" :key="invoice.invoice">
        <TableCell>{{ invoice.invoice }}</TableCell>
        <TableCell>{{ invoice.status }}</TableCell>
        <TableCell>{{ invoice.method }}</TableCell>
        <TableCell class="text-right">{{ invoice.amount }}</TableCell>
      </TableRow>
    </TableBody>
  </Table>
</template>`
</script>

<template>
  <div>
    <ComponentHeading>Basic Usage</ComponentHeading>

    <div class="mt-4">
      <Table>
        <TableCaption>A list of your recent invoices.</TableCaption>

        <TableHeader>
          <TableRow>
            <TableHead class="w-[100px]"> Invoice </TableHead>

            <TableHead>Status</TableHead>

            <TableHead>Method</TableHead>

            <TableHead class="text-right"> Amount </TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          <TableRow v-for="invoice in invoices" :key="invoice.invoice">
            <TableCell class="font-medium">
              {{ invoice.invoice }}
            </TableCell>

            <TableCell>{{ invoice.paymentStatus }}</TableCell>

            <TableCell>{{ invoice.paymentMethod }}</TableCell>

            <TableCell class="text-right">
              {{ invoice.totalAmount }}
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>

    <CodeBlock class="mt-4" lang="vue" :code="code" />
  </div>
</template>
