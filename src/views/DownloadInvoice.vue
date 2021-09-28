<template>
  <div v-if="currentInvoice" class="invoice-view container" style="margin-top: 2px;">

      <!-- Invoice Details -->
      <div class="invoice-details flex flex-column">
      <div class="left flex flex-column">
        <h1>Padini General Supplies</h1>
      </div>
          <div class="top flex">
              <div class="left flex flex-column">
                  <p><span>#</span>{{ currentInvoice.invoiceId }}</p>
                  <p>{{ currentInvoice.productDescription }}</p>
              </div>
              <div class="right flex flex-column">
                  <p>{{ currentInvoice.billerStreetAddress }}</p>
                  <p>{{ currentInvoice.billerCity }}</p>
                  <p>{{ currentInvoice.billerZipCode }}</p>
                  <p>{{ currentInvoice.billerCountry }}</p>
                  <p>{{ currentInvoice.billerPhoneNumber }}</p>
              </div>
          </div>
          <div class="middle flex">
              <div class="payment flex flex-column">
                  <h4>Invoice Date</h4>
                  <p>
                      {{ currentInvoice.invoiceDate }}
                  </p>
                  <h4>Payment Date</h4>
                  <p>
                      {{ currentInvoice.paymentDueDate }}
                  </p>
              </div>
              <div class="bill flex flex-column">
                  <h4>Bill To</h4>
                  <p>{{ currentInvoice.clientName }}</p>
                  <p>{{ currentInvoice.clientStreetAddress }}</p>
                  <p>{{ currentInvoice.clientCity }}</p>
                  <p>{{ currentInvoice.clientZipCode }}</p>
                  <p>{{ currentInvoice.clientCountry }}</p>
                  <p>{{ currentInvoice.clientPhoneNumber}}</p>
              </div>
              <div class="send-to flex flex-column">
                  <h4>Sent To</h4>
                  <p>{{ currentInvoice.clientEmail }}</p>
              </div>
          </div>
          <div class="bottom flex flex-column">
              <div class="billing-items">
                  <div class="heading flex">
                      <p>Item Name</p>
                      <p>Quantity</p>
                      <p>Price</p>
                      <p>Total</p>
                  </div>
                  <div v-for="(item, index) in currentInvoice.invoiceItemList" :key="index" class="item flex">
                      <p>{{ item.itemName }}</p>
                      <p>{{ item.qty }}</p>
                      <p>{{ item.price }}</p>
                      <p>{{ item.total }}</p>
                  </div>
              </div>
              <div class="total flex">
                  <p>Amount Due</p>
                  <p>KShs. {{ currentInvoice.invoiceTotal }}</p>
              </div>
          </div>
      </div>
        <!-- Footer -->
        <br>
      <div class="header flex">
          <div class="left flex">
              <span>Download Invoice For Printing</span>
          </div>
          <div class="right flex">
              <!-- <button @click="renderInvoice" class="render-invoice">Render Invoice</button> -->
              <!-- <button @click="createInvoice" class="create-invoice">Create Invoice</button> -->
              <!-- <button @click="printInvoice" class="download-invoice">Print Invoice</button> -->
              <button @click="downloadInvoice" class="download-invoice">Download Invoice</button>
          </div>
      </div>
      <router-link class="nav-link flex" :to="{
          path: '/invoice/'+currentInvoice.invoiceId
      }">
          <img src="@/assets/icon-arrow-left.svg" alt=""> Go Back
      </router-link>
  </div>
</template>

<script>
import {
    mapActions,
    mapMutations,
    mapState
} from 'vuex';
// import easyinvoice from 'easyinvoice';
export default {
    name: "invoiceView",

    data() {
        return {
            currentInvoice: null,
        };
    },

    created() {
        this.getCurrentInvoice();
    },
    methods: {
        ...mapMutations([
            "SET_CURRENT_INVOICE",
            "TOGGLE_EDIT_INVOICE",
            "TOGGLE_INVOICE",
        ]),

        ...mapActions([
            "DELETE_INVOICE",
            "UPDATE_STATUS_TO_PENDING",
            "UPDATE_STATUS_TO_PAID"
        ]),

        getCurrentInvoice() {
            this.SET_CURRENT_INVOICE(this.$route.params.invoiceId);
            this.currentInvoice = this.currentInvoiceArray[0];
        },

        toggleEditInvoice() {
            this.TOGGLE_EDIT_INVOICE();
            this.TOGGLE_INVOICE();
        },

        toggleInvoice() {
            this.TOGGLE_INVOICE();
        },

        async deleteInvoice(docId) {
            await this.DELETE_INVOICE(docId);
            this.$router.push({
                name: "Home"
            });
        },

        updateStatusToPaid(docId) {
            this.UPDATE_STATUS_TO_PAID(docId);
        },

        updateStatusToPending(docId) {
            this.UPDATE_STATUS_TO_PENDING(docId);
        },
        // async createInvoice() {
        //     const data = this.getData();
        //     const result = await easyinvoice.createInvoice(data);
        //     this.invoiceBase64 = result.pdf;
        // },
        // async downloadInvoice() {
        //     const data = this.getData();
        //     const result = await easyinvoice.createInvoice(data);
        //     easyinvoice.download('PGS-'+this.currentInvoice.invoiceId+'.pdf', result.pdf);
        // },
        // async renderInvoice(){
        //     document.getElementById("pdf").innerHTML = "loading...";
        //     const data = this.getData();
        //     const result = await easyinvoice.createInvoice(data);
        //     easyinvoice.render('pdf', result.pdf);
        // },
        downloadInvoice(){
            // document.getElementById("pdf").innerHTML = "loading...";
            // const data = this.getData();
            // const result = await easyinvoice.createInvoice(data);
            // easyinvoice.print('pdf', result.pdf);
            // window.printPreview('PGS-'+this.currentInvoice.invoiceId+'.pdf');
            window.print();
        },
        // getData() {
        //     return {
        //         "currency": "KES", 
        //         //Defaults to no currency. List of currency codes: https://www.iban.com/currency-codes

        //         "taxNotation": "vat", //or gst
        //         "marginTop": 25,
        //         "marginRight": 25,
        //         "marginLeft": 25,
        //         "marginBottom": 25,
        //         "logo": "https://public.easyinvoice.cloud/img/logo_en_original.png", //or base64
        //                 "background": "https://public.easyinvoice.cloud/img/watermark-draft.jpg", //or base64
        //         "sender": {
        //         "company": "Sample Corp",
        //         "address": "Sample Street 123",
        //         "zip": "1234 AB",
        //         "city": "Sampletown",
        //         "country": "Samplecountry"
        //         //"custom1": "custom value 1",
        //         //"custom2": "custom value 2",
        //         //"custom3": "custom value 3"
        //         },
        //         "client": {
        //         "company": "Client Corp",
        //         "address": "Clientstreet 456",
        //         "zip": "4567 CD",
        //         "city": "Clientcity",
        //         "country": "Clientcountry"
        //         //"custom1": "custom value 1",
        //         //"custom2": "custom value 2",
        //         //"custom3": "custom value 3"
        //         },
        //         "invoiceNumber": this.currentInvoice.invoiceId,
        //         "invoiceDate": this.currentInvoice.invoiceDate,
        //         "products": [
        //             {
        //                 "quantity": "2",
        //                 "description": "Test1",
        //                 "tax": 6,
        //                 "price": 33.87
        //             },
        //             {
        //                 "quantity": "4",
        //                 "description": "Test2",
        //                 "tax": 21,
        //                 "price": 10.45
        //             }
        //         ],
        //         "bottomNotice": "Kindly pay your invoice within 15 days.",
        //         //Used for translating the headers to your preferred language
        //         //Defaults to English. Below example is translated to Dutch
        //         // "translate": { 
        //         //     "invoiceNumber": "Factuurnummer",
        //         //     "invoiceDate": "Factuurdatum",
        //         //     "products": "Producten", 
        //         //     "quantity": "Aantal", 
        //         //     "price": "Prijs",
        //         //     "subtotal": "Subtotaal",
        //         //     "total": "Totaal" 
        //         // }
        //     }
        // }
    },
    computed: {
        ...mapState(
            [
                "currentInvoiceArray",
                "editInvoice"
            ]
        )
    },
    watch: {
        editInvoice() {
            if (!this.editInvoice) {
                this.currentInvoice = this.currentInvoiceArray[0];
            }
        }
    },
}
</script>

<style lang="scss" scoped>
.invoice-view {
    .nav-link {
        margin-top: 32px;
        align-items: center;
        color: rgb(255, 248, 248);
        font-size: 12px;
        img {
            margin-right: 16px;
            width: 7px;
            height: 10px;
        }

        
    }

    .header,
    .invoice-details {
        background-color: rgb(255, 255, 255); //98a0de
        border-radius: 20px;
    }

    .header {
        align-items: center;
        padding: 24px 32px;
        font-size: 12px;

        .left {
            align-items: center;

            span {
                color: #000;
                margin-right: 16px;
            }
        }

        .right {
            flex: 1;
            justify-content: flex-end;

            button {
                color: #000;
            }
        }
    }

    .invoice-details {
        padding: 48px;
        margin-top: 24px;
        // background-color: #000;

        .top {
            div {
                color: #000;
                flex: 1;
            }

            .left {
                font-size: 12px;
                p:first-child {
                    font-size: 24px;
                    text-transform: uppercase;
                    color: #000;
                    margin-top: 8px;
                }

                p:nth-child(2) {
                    font-size: 16px;
                }

                span {
                    color: #888eb0;
                }
            }

            .right {
                font-size: 12px;
                align-items: flex-end;
            }
        }

        .middle {
            margin-top: 50px;
            color: #000;
            gap: 16px;

            h4 {
                font-size: 12px;
                font-weight: 400;
                margin-bottom: 12px;
            }

            p {
                font-size: 16px;
            }

            .bill,
            .payment {
                flex: 1;
            }

            .payment {
                h4:nth-child(3) {
                    margin-top: 32px;
                }

                p {
                    font-weight: 600;
                }
            }

            .bill {
                p:nth-child(2) {
                    font-size: 16px;
                }

                p:nth-child(3) {
                    margin-top: auto;
                    margin-left: 0;
                }

                p {
                    font-size: 12px;
                }
            }

            .send-to {
                flex: 2;
            }
        }

        .bottom {
            margin-top: 50px;

            .billing-items {
                padding: 32px;
                border-radius: 20px 20px 0 0 ;
                background-color: #bbbbbb;

                .heading {
                    color: #000;
                    font-size: 12px;
                    margin-bottom: 32px;

                    p:first-child {
                        flex: 3;
                        text-align: left;
                    }

                    p {
                        flex: 1;
                        text-align: right;
                    }
                }

                .item {
                    margin-bottom: 32px;
                    font-size: 14px;
                    color: #000;

                    &:last-child{
                        margin-bottom: 0;
                    }

                    p:first-child {
                        flex: 3;
                        text-align: left;
                    }

                    p {
                        flex: 1;
                        text-align: right;
                    }
                }
            }

            .total {
                color: #000;
                padding: 32px;
                background-color: rgba(128, 128, 128, 0.7);
                align-items: center;
                border-radius: 0 0 20px 20px;

                p {
                    flex: 1;
                    font-size: 16px;
                }

                p:nth-child(2) {
                    font-size: 28px;
                    text-align: right;
                }
            }
        }
    }
    .download-invoice {
        background-color: #53b5ee;
    }
}
</style>