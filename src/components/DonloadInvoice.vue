<template>
  <button class="render" @click="renderInvoice">Render Invoice</button>
  <button class="create" @click="createInvoice">Create Invoice</button>
  <button class="download" @click="downloadInvoice">Download Invoice</button>
  <br>
  <p>
      Invoice Base64
      <small>{{ invoiceBase64 }}</small>
  </p>
  <div id="pdf"></div>
</template>

<script>
import easyinvoice from 'easyinvoice';
export default {
    name: "DownloadInvoice",
    data() {
        return {
            invoiceBase64: ''
        }
    },
    mounted() {
        this.run()
    },
    methods: {
        async createInvoice() {
            const data = this.getData();
            const result = await easyinvoice.createInvoice(data);
            this.invoiceBase64 = result.pdf;
        },
        async downloadInvoice() {
            const data = this.getData();
            const result = await easyinvoice.createInvoice(data);
            easyinvoice.download('myInvoice.pdf', result.pdf);
        },
        async renderInvoice(){
            document.getElementById("pdf").innerHTML = "loading...";
            const data = this.getData();
            const result = await easyinvoice.createInvoice(data);
            easyinvoice.render('pdf', result.pdf);
        },
        getData() {
            return {
                "currency": "USD", 
                //Defaults to no currency. List of currency codes: https://www.iban.com/currency-codes

                "taxNotation": "vat", //or gst
                "marginTop": 25,
                "marginRight": 25,
                "marginLeft": 25,
                "marginBottom": 25,
            }
        }
    }

}
</script>

<style>
#pdf {
    text-align: center;
}

#pdf {
    border: 1px solid black;
    width: 95%;
}
</style>