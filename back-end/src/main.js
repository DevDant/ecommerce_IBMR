const express = require('express');
const cors = require('cors');
const app = express();
const port = 3030;

app.use(cors());

app.get('/', (req, res) => {
  res.json(
    {
      "site_id": "MLB",
      "country_default_time_zone": "GMT-03:00",
      "query": "eletronicos",
      "paging": {
          "total": 2583073,
          "primary_results": 1000,
          "offset": 0,
          "limit": 10
      },
      "results": [
          {
              "id": "MLB2769050397",
              "title": "Fone Bluetooth Premium Compatível Air Pods 3º Geração Sumexr",
              "condition": "new",
              "thumbnail_id": "826677-MLB51244072964_082022",
              "catalog_product_id": "MLB19748097",
              "listing_type_id": "gold_special",
              "permalink": "https://produto.mercadolivre.com.br/MLB-2769050397-fone-bluetooth-premium-compativel-air-pods-3-geraco-sumexr-_JM",
              "buying_mode": "buy_it_now",
              "site_id": "MLB",
              "category_id": "MLB7457",
              "domain_id": "MLB-HEADPHONES",
              "thumbnail": "http://http2.mlstatic.com/D_826677-MLB51244072964_082022-I.jpg",
              "currency_id": "BRL",
              "order_backend": 1,
              "price": 99,
              "original_price": null,
              "sale_price": null,
              "sold_quantity": 250,
              "available_quantity": 1,
              "official_store_id": null,
              "use_thumbnail_id": true,
              "accepts_mercadopago": true,
              "tags": [
                  "good_quality_thumbnail",
                  "extended_warranty_eligible",
                  "good_quality_picture",
                  "immediate_payment",
                  "cart_eligible",
                  "best_seller_candidate",
                  "shipping_guaranteed"
              ],
              "variation_filters": [
                  "COLOR"
              ],
              "shipping": {
                  "store_pick_up": false,
                  "free_shipping": true,
                  "logistic_type": "fulfillment",
                  "mode": "me2",
                  "tags": [
                      "fulfillment",
                      "self_service_out",
                      "mandatory_free_shipping"
                  ],
                  "promise": null
              },
              "stop_time": "2043-05-23T18:01:16.000Z",
              "seller": {
                  "id": 288953550,
                  "nickname": "FCAGROUP",
                  "car_dealer": false,
                  "real_estate_agency": false,
                  "_": false,
                  "registration_date": "2017-12-06T14:43:47.000-04:00",
                  "tags": [
                      "normal",
                      "eshop",
                      "mshops",
                      "credits_profile",
                      "messages_as_seller"
                  ],
                  "car_dealer_logo": "",
                  "permalink": "http://perfil.mercadolivre.com.br/FCAGROUP",
                  "seller_reputation": {
                      "level_id": "5_green",
                      "power_seller_status": "gold",
                      "transactions": {
                          "canceled": 372,
                          "completed": 4702,
                          "period": "historic",
                          "ratings": {
                              "negative": 0.1,
                              "neutral": 0.02,
                              "positive": 0.88
                          },
                          "total": 5074
                      },
                      "metrics": {
                          "sales": {
                              "period": "60 days",
                              "completed": 1693
                          },
                          "claims": {
                              "period": "60 days",
                              "rate": 0.0005,
                              "value": 1
                          },
                          "delayed_handling_time": {
                              "period": "60 days",
                              "rate": 0,
                              "value": 0
                          },
                          "cancellations": {
                              "period": "60 days",
                              "rate": 0,
                              "value": 0
                          }
                      }
                  },
                  "eshop": {
                      "eshop_id": 491238,
                      "seller": 288953550,
                      "nick_name": "FCAGROUP",
                      "eshop_status_id": 1,
                      "site_id": "MLB",
                      "eshop_experience": 0,
                      "eshop_rubro": null,
                      "eshop_locations": [],
                      "eshop_logo_url": "http://http2.mlstatic.com/eshops-logo/logo-288953550-1650815858133.jpeg"
                  }
              },
              "seller_address": {
                  "comment": "",
                  "address_line": "",
                  "id": null,
                  "latitude": null,
                  "longitude": null,
                  "country": {
                      "id": "BR",
                      "name": "Brasil"
                  },
                  "state": {
                      "id": "BR-SP",
                      "name": "São Paulo"
                  },
                  "city": {
                      "id": "BR-SP-44",
                      "name": "São Paulo"
                  }
              },
              "address": {
                  "state_id": "BR-SP",
                  "state_name": "São Paulo",
                  "city_id": "BR-SP-44",
                  "city_name": "São Paulo"
              },
              "attributes": [
                  {
                      "id": "ALPHANUMERIC_MODEL",
                      "name": "Modelo alfanumérico",
                      "value_id": "13413156",
                      "value_name": "Aux",
                      "attribute_group_id": "OTHERS",
                      "attribute_group_name": "Outros",
                      "value_struct": null,
                      "values": [
                          {
                              "id": "13413156",
                              "name": "Aux",
                              "struct": null,
                              "source": 3942444344910321
                          }
                      ],
                      "source": 3942444344910321,
                      "value_type": "string"
                  },
                  {
                      "id": "BRAND",
                      "name": "Marca",
                      "value_id": "5885860",
                      "value_name": "Sumexr",
                      "attribute_group_id": "OTHERS",
                      "attribute_group_name": "Outros",
                      "value_struct": null,
                      "values": [
                          {
                              "id": "5885860",
                              "name": "Sumexr",
                              "struct": null,
                              "source": 3045741222775799
                          }
                      ],
                      "source": 3045741222775799,
                      "value_type": "string"
                  },
                  {
                      "id": "ITEM_CONDITION",
                      "name": "Condição do item",
                      "value_id": "2230284",
                      "value_name": "Novo",
                      "attribute_group_id": "OTHERS",
                      "attribute_group_name": "Outros",
                      "value_struct": null,
                      "values": [
                          {
                              "id": "2230284",
                              "name": "Novo",
                              "struct": null,
                              "source": 3045741222775799
                          }
                      ],
                      "source": 3045741222775799,
                      "value_type": "list"
                  },
                  {
                      "id": "LINE",
                      "name": "Linha",
                      "value_id": "12012316",
                      "value_name": "Headset",
                      "attribute_group_id": "OTHERS",
                      "attribute_group_name": "Outros",
                      "value_struct": null,
                      "values": [
                          {
                              "id": "12012316",
                              "name": "Headset",
                              "struct": null,
                              "source": 3942444344910321
                          }
                      ],
                      "source": 3942444344910321,
                      "value_type": "string"
                  },
                  {
                      "id": "MODEL",
                      "name": "Modelo",
                      "value_id": null,
                      "value_name": "Celular, Academia, Android, IOS, Áudio, Corrida, Aminhada, Confortavel, Barato, Bluetooth, Caminhada, Corrida, Eletrônicos, Esportes, Fone, Fone De Ouvido, Garantia, Infantil, Intra Auricular, Ios, Lightning, Maça, Sem Fio,Branco, Black, Gamer, Microfone,",
                      "attribute_group_id": "OTHERS",
                      "attribute_group_name": "Outros",
                      "value_struct": null,
                      "values": [
                          {
                              "id": null,
                              "name": "Celular, Academia, Android, IOS, Áudio, Corrida, Aminhada, Confortavel, Barato, Bluetooth, Caminhada, Corrida, Eletrônicos, Esportes, Fone, Fone De Ouvido, Garantia, Infantil, Intra Auricular, Ios, Lightning, Maça, Sem Fio,Branco, Black, Gamer, Microfone,",
                              "struct": null,
                              "source": 3376461333454861
                          }
                      ],
                      "source": 3376461333454861,
                      "value_type": "string"
                  },
                  {
                      "id": "UNITS_PER_PACKAGE",
                      "name": "Unidades por embalagem",
                      "value_id": null,
                      "value_name": "1",
                      "attribute_group_id": "OTHERS",
                      "attribute_group_name": "Outros",
                      "value_struct": null,
                      "values": [
                          {
                              "id": null,
                              "name": "1",
                              "struct": null,
                              "source": 3376461333454861
                          }
                      ],
                      "source": 3376461333454861,
                      "value_type": "number"
                  }
              ],
              "variations_data": {
                  "175091449366": {
                      "thumbnail": "http://http2.mlstatic.com/D_826677-MLB51244072964_082022-O.jpg",
                      "ratio": "0.77",
                      "name": "Branco",
                      "pictures_qty": 3,
                      "inventory_id": "PEGA26588"
                  }
              },
              "installments": {
                  "quantity": 12,
                  "amount": 9.62,
                  "rate": 16.64,
                  "currency_id": "BRL"
              },
              "winner_item_id": null,
              "discounts": null,
              "promotions": [],
              "inventory_id": null
          },
          {
              "id": "MLB2008762502",
              "title": "Cofre Lorben Bm96-x Com Abertura Eletrônica Cor Preto",
              "condition": "new",
              "thumbnail_id": "611698-MLA43060194198_082020",
              "catalog_product_id": "MLB15468442",
              "listing_type_id": "gold_pro",
              "permalink": "https://www.mercadolivre.com.br/cofre-lorben-bm96-x-com-abertura-eletrnica-cor-preto/p/MLB15468442",
              "buying_mode": "buy_it_now",
              "site_id": "MLB",
              "category_id": "MLB33430",
              "domain_id": "MLB-SAFES",
              "thumbnail": "http://http2.mlstatic.com/D_611698-MLA43060194198_082020-I.jpg",
              "currency_id": "BRL",
              "order_backend": 2,
              "price": 273,
              "original_price": 325,
              "sale_price": null,
              "sold_quantity": 500,
              "available_quantity": 100,
              "official_store_id": 50074,
              "official_store_name": "Lorben",
              "use_thumbnail_id": true,
              "accepts_mercadopago": true,
              "tags": [
                  "brand_verified",
                  "extended_warranty_eligible",
                  "good_quality_picture",
                  "good_quality_thumbnail",
                  "immediate_payment",
                  "cart_eligible",
                  "best_seller_candidate",
                  "meli_choice_candidate",
                  "shipping_guaranteed"
              ],
              "shipping": {
                  "store_pick_up": false,
                  "free_shipping": true,
                  "logistic_type": "fulfillment",
                  "mode": "me2",
                  "tags": [
                      "fulfillment",
                      "mandatory_free_shipping"
                  ],
                  "promise": null
              },
              "stop_time": "2041-08-29T04:00:00.000Z",
              "seller": {
                  "id": 53212238,
                  "nickname": "FOCA_LOUCA",
                  "car_dealer": false,
                  "real_estate_agency": false,
                  "_": false,
                  "registration_date": "2011-04-28T16:22:20.000-04:00",
                  "tags": [
                      "brand",
                      "large_seller",
                      "eshop",
                      "credits_profile",
                      "messages_as_seller"
                  ],
                  "car_dealer_logo": "",
                  "permalink": "http://perfil.mercadolivre.com.br/LORBEN_OFICIAL",
                  "seller_reputation": {
                      "level_id": "5_green",
                      "power_seller_status": "platinum",
                      "transactions": {
                          "canceled": 6328,
                          "completed": 116226,
                          "period": "historic",
                          "ratings": {
                              "negative": 0.04,
                              "neutral": 0.02,
                              "positive": 0.94
                          },
                          "total": 122554
                      },
                      "metrics": {
                          "sales": {
                              "period": "60 days",
                              "completed": 18642
                          },
                          "claims": {
                              "period": "60 days",
                              "rate": 0.007,
                              "value": 137
                          },
                          "delayed_handling_time": {
                              "period": "60 days",
                              "rate": 0,
                              "value": 0
                          },
                          "cancellations": {
                              "period": "60 days",
                              "rate": 0.0001,
                              "value": 3
                          }
                      }
                  },
                  "eshop": {
                      "eshop_id": 96710,
                      "seller": 53212238,
                      "nick_name": "FOCA_LOUCA",
                      "eshop_status_id": 1,
                      "site_id": "MLB",
                      "eshop_experience": 0,
                      "eshop_rubro": null,
                      "eshop_locations": [],
                      "eshop_logo_url": "http://http2.mlstatic.com/eshops-logo/53212238v3d2b7a.png"
                  }
              },
              "seller_address": {
                  "comment": "",
                  "address_line": "",
                  "id": null,
                  "latitude": null,
                  "longitude": null,
                  "country": {
                      "id": "BR",
                      "name": "Brasil"
                  },
                  "state": {
                      "id": "BR-SP",
                      "name": "São Paulo"
                  },
                  "city": {
                      "id": "BR-SP-44",
                      "name": "São Paulo"
                  }
              },
              "address": {
                  "state_id": "BR-SP",
                  "state_name": "São Paulo",
                  "city_id": "BR-SP-44",
                  "city_name": "São Paulo"
              },
              "attributes": [
                  {
                      "id": "BRAND",
                      "name": "Marca",
                      "value_id": "2113433",
                      "value_name": "Lorben",
                      "attribute_group_id": "OTHERS",
                      "attribute_group_name": "Outros",
                      "value_struct": null,
                      "values": [
                          {
                              "id": "2113433",
                              "name": "Lorben",
                              "struct": null,
                              "source": 1
                          }
                      ],
                      "source": 1,
                      "value_type": "string"
                  },
                  {
                      "id": "EXTERNAL_LENGTH",
                      "name": "Comprimento externo",
                      "value_id": "1018395",
                      "value_name": "20 cm",
                      "attribute_group_id": "OTHERS",
                      "attribute_group_name": "Outros",
                      "value_struct": {
                          "number": 20,
                          "unit": "cm"
                      },
                      "values": [
                          {
                              "id": "1018395",
                              "name": "20 cm",
                              "struct": {
                                  "unit": "cm",
                                  "number": 20
                              },
                              "source": 1
                          }
                      ],
                      "source": 1,
                      "value_type": "number_unit"
                  },
                  {
                      "id": "INTERNAL_LENGTH",
                      "name": "Comprimento interior",
                      "value_id": "8149047",
                      "value_name": "18.5 cm",
                      "attribute_group_id": "OTHERS",
                      "attribute_group_name": "Outros",
                      "value_struct": {
                          "number": 18.5,
                          "unit": "cm"
                      },
                      "values": [
                          {
                              "id": "8149047",
                              "name": "18.5 cm",
                              "struct": {
                                  "number": 18.5,
                                  "unit": "cm"
                              },
                              "source": 1
                          }
                      ],
                      "source": 1,
                      "value_type": "number_unit"
                  },
                  {
                      "id": "ITEM_CONDITION",
                      "name": "Condição do item",
                      "value_id": "2230284",
                      "value_name": "Novo",
                      "attribute_group_id": "OTHERS",
                      "attribute_group_name": "Outros",
                      "value_struct": null,
                      "values": [
                          {
                              "id": "2230284",
                              "name": "Novo",
                              "struct": null,
                              "source": 4333789534002961
                          }
                      ],
                      "source": 4333789534002961,
                      "value_type": "list"
                  },
                  {
                      "id": "MAX_KEY_LENGTH",
                      "name": "Comprimento máximo da senha",
                      "value_id": "8060348",
                      "value_name": "8",
                      "attribute_group_id": "OTHERS",
                      "attribute_group_name": "Outros",
                      "value_struct": null,
                      "values": [
                          {
                              "id": "8060348",
                              "name": "8",
                              "struct": null,
                              "source": 1
                          }
                      ],
                      "source": 1,
                      "value_type": "number"
                  },
                  {
                      "id": "MIN_KEY_LENGTH",
                      "name": "Comprimento mínimo da senha",
                      "value_id": "8060346",
                      "value_name": "3",
                      "attribute_group_id": "OTHERS",
                      "attribute_group_name": "Outros",
                      "value_struct": null,
                      "values": [
                          {
                              "id": "8060346",
                              "name": "3",
                              "struct": null,
                              "source": 1
                          }
                      ],
                      "source": 1,
                      "value_type": "number"
                  },
                  {
                      "id": "MODEL",
                      "name": "Modelo",
                      "value_id": "8061423",
                      "value_name": "BM96-X",
                      "attribute_group_id": "OTHERS",
                      "attribute_group_name": "Outros",
                      "value_struct": null,
                      "values": [
                          {
                              "id": "8061423",
                              "name": "BM96-X",
                              "struct": null,
                              "source": 1
                          }
                      ],
                      "source": 1,
                      "value_type": "string"
                  },
                  {
                      "id": "PACKAGE_LENGTH",
                      "name": "Comprimento da embalagem",
                      "value_id": null,
                      "value_name": "10 cm",
                      "attribute_group_id": "OTHERS",
                      "attribute_group_name": "Outros",
                      "value_struct": {
                          "number": 10,
                          "unit": "cm"
                      },
                      "values": [
                          {
                              "id": null,
                              "name": "10 cm",
                              "struct": {
                                  "number": 10,
                                  "unit": "cm"
                              },
                              "source": 4333789534002961
                          }
                      ],
                      "source": 4333789534002961,
                      "value_type": "number_unit"
                  },
                  {
                      "id": "PACKAGE_WEIGHT",
                      "name": "Peso da embalagem",
                      "value_id": null,
                      "value_name": "3000 g",
                      "attribute_group_id": "OTHERS",
                      "attribute_group_name": "Outros",
                      "value_struct": {
                          "number": 3000,
                          "unit": "g"
                      },
                      "values": [
                          {
                              "id": null,
                              "name": "3000 g",
                              "struct": {
                                  "number": 3000,
                                  "unit": "g"
                              },
                              "source": 4333789534002961
                          }
                      ],
                      "source": 4333789534002961,
                      "value_type": "number_unit"
                  },
                  {
                      "id": "WEIGHT",
                      "name": "Peso",
                      "value_id": "946904",
                      "value_name": "4.3 kg",
                      "attribute_group_id": "OTHERS",
                      "attribute_group_name": "Outros",
                      "value_struct": {
                          "number": 4.3,
                          "unit": "kg"
                      },
                      "values": [
                          {
                              "id": "946904",
                              "name": "4.3 kg",
                              "struct": {
                                  "unit": "kg",
                                  "number": 4.3
                              },
                              "source": 1
                          }
                      ],
                      "source": 1,
                      "value_type": "number_unit"
                  }
              ],
              "installments": {
                  "quantity": 9,
                  "amount": 30.33,
                  "rate": 0,
                  "currency_id": "BRL"
              },
              "winner_item_id": null,
              "catalog_listing": true,
              "discounts": null,
              "promotions": [],
              "differential_pricing": {
                  "id": 35713365
              },
              "inventory_id": "SLIJ03738"
          },
          {
              "id": "MLB1179693925",
              "title": "Fonte Chaveada 12v 20a 250w Camera Som Bivolt ",
              "condition": "new",
              "thumbnail_id": "899268-MLB32546109230_102019",
              "catalog_product_id": null,
              "listing_type_id": "gold_pro",
              "permalink": "https://produto.mercadolivre.com.br/MLB-1179693925-fonte-chaveada-12v-20a-250w-camera-som-bivolt-_JM",
              "buying_mode": "buy_it_now",
              "site_id": "MLB",
              "category_id": "MLB420411",
              "domain_id": "MLB-EMBEDDED_SWITCH_MODE_POWER_SUPPLIES",
              "thumbnail": "http://http2.mlstatic.com/D_899268-MLB32546109230_102019-I.jpg",
              "currency_id": "BRL",
              "order_backend": 3,
              "price": 49.99,
              "original_price": null,
              "sale_price": null,
              "sold_quantity": 150,
              "available_quantity": 1,
              "official_store_id": null,
              "use_thumbnail_id": true,
              "accepts_mercadopago": true,
              "tags": [
                  "extended_warranty_eligible",
                  "good_quality_picture",
                  "good_quality_thumbnail",
                  "immediate_payment",
                  "cart_eligible",
                  "shipping_guaranteed"
              ],
              "shipping": {
                  "store_pick_up": false,
                  "free_shipping": false,
                  "logistic_type": "xd_drop_off",
                  "mode": "me2",
                  "tags": [],
                  "promise": null
              },
              "stop_time": "2039-12-08T20:38:30.000Z",
              "seller": {
                  "id": 50020162,
                  "nickname": "MAGIC EXPRESSCOMERCIODIGITAL",
                  "car_dealer": false,
                  "real_estate_agency": false,
                  "_": false,
                  "registration_date": "2004-03-21T15:24:57.000-04:00",
                  "tags": [
                      "normal",
                      "mshops",
                      "messages_as_seller"
                  ],
                  "car_dealer_logo": "",
                  "permalink": "http://perfil.mercadolivre.com.br/MAGIC+EXPRESSCOMERCIODIGITAL",
                  "seller_reputation": {
                      "level_id": "5_green",
                      "power_seller_status": null,
                      "transactions": {
                          "canceled": 38,
                          "completed": 559,
                          "period": "historic",
                          "ratings": {
                              "negative": 0.05,
                              "neutral": 0.04,
                              "positive": 0.91
                          },
                          "total": 597
                      },
                      "metrics": {
                          "sales": {
                              "period": "365 days",
                              "completed": 559
                          },
                          "claims": {
                              "period": "365 days",
                              "rate": 0.0117,
                              "value": 7
                          },
                          "delayed_handling_time": {
                              "period": "365 days",
                              "rate": 0.0962,
                              "value": 54
                          },
                          "cancellations": {
                              "period": "365 days",
                              "rate": 0.0016,
                              "value": 1
                          }
                      }
                  }
              },
              "seller_address": {
                  "comment": "",
                  "address_line": "",
                  "id": null,
                  "latitude": null,
                  "longitude": null,
                  "country": {
                      "id": "BR",
                      "name": "Brasil"
                  },
                  "state": {
                      "id": "BR-RJ",
                      "name": "Rio de Janeiro"
                  },
                  "city": {
                      "id": "BR-RJ-01",
                      "name": "Rio de Janeiro"
                  }
              },
              "address": {
                  "state_id": "BR-RJ",
                  "state_name": "Rio de Janeiro",
                  "city_id": "BR-RJ-01",
                  "city_name": "Rio de Janeiro"
              },
              "attributes": [
                  {
                      "id": "BRAND",
                      "name": "Marca",
                      "value_id": null,
                      "value_name": "NH",
                      "attribute_group_id": "OTHERS",
                      "attribute_group_name": "Outros",
                      "value_struct": null,
                      "values": [
                          {
                              "id": null,
                              "name": "NH",
                              "struct": null,
                              "source": 1572
                          }
                      ],
                      "source": 1572,
                      "value_type": "string"
                  },
                  {
                      "id": "ITEM_CONDITION",
                      "name": "Condição do item",
                      "value_id": "2230284",
                      "value_name": "Novo",
                      "attribute_group_id": "OTHERS",
                      "attribute_group_name": "Outros",
                      "value_struct": null,
                      "values": [
                          {
                              "id": "2230284",
                              "name": "Novo",
                              "struct": null,
                              "source": 1572
                          }
                      ],
                      "source": 1572,
                      "value_type": "list"
                  },
                  {
                      "id": "MODEL",
                      "name": "Modelo",
                      "value_id": null,
                      "value_name": "chaveada",
                      "attribute_group_id": "OTHERS",
                      "attribute_group_name": "Outros",
                      "value_struct": null,
                      "values": [
                          {
                              "id": null,
                              "name": "chaveada",
                              "struct": null,
                              "source": 1572
                          }
                      ],
                      "source": 1572,
                      "value_type": "string"
                  },
                  {
                      "id": "POWER",
                      "name": "Potência",
                      "value_id": null,
                      "value_name": "250 W",
                      "attribute_group_id": "OTHERS",
                      "attribute_group_name": "Outros",
                      "value_struct": {
                          "number": 250,
                          "unit": "W"
                      },
                      "values": [
                          {
                              "id": null,
                              "name": "250 W",
                              "struct": {
                                  "number": 250,
                                  "unit": "W"
                              },
                              "source": 1572
                          }
                      ],
                      "source": 1572,
                      "value_type": "number_unit"
                  }
              ],
              "installments": {
                  "quantity": 3,
                  "amount": 16.66,
                  "rate": 0,
                  "currency_id": "BRL"
              },
              "winner_item_id": null,
              "discounts": null,
              "promotions": [],
              "differential_pricing": {
                  "id": 35713359
              },
              "inventory_id": null
          },
          {
              "id": "MLB3266375259",
              "title": "Cartão Micro Sd Intelbras 128gb 64tbw P Segurança Eletrônica",
              "condition": "new",
              "thumbnail_id": "848860-MLB49665303098_042022",
              "catalog_product_id": "MLB19766720",
              "listing_type_id": "gold_special",
              "permalink": "https://www.mercadolivre.com.br/carto-micro-sd-intelbras-128gb-64tbw-p-seguranca-eletrnica/p/MLB19766720",
              "buying_mode": "buy_it_now",
              "site_id": "MLB",
              "category_id": "MLB4893",
              "domain_id": "MLB-MEMORY_CARDS",
              "thumbnail": "http://http2.mlstatic.com/D_848860-MLB49665303098_042022-I.jpg",
              "currency_id": "BRL",
              "order_backend": 4,
              "price": 145,
              "original_price": null,
              "sale_price": null,
              "sold_quantity": 250,
              "available_quantity": 1,
              "official_store_id": null,
              "use_thumbnail_id": true,
              "accepts_mercadopago": true,
              "tags": [
                  "extended_warranty_eligible",
                  "immediate_payment",
                  "cart_eligible",
                  "best_seller_candidate"
              ],
              "shipping": {
                  "store_pick_up": false,
                  "free_shipping": true,
                  "logistic_type": "xd_drop_off",
                  "mode": "me2",
                  "tags": [
                      "mandatory_free_shipping"
                  ],
                  "promise": null
              },
              "stop_time": "2043-03-18T04:00:00.000Z",
              "seller": {
                  "id": 326667718,
                  "nickname": "MASTER MEMORY",
                  "car_dealer": false,
                  "real_estate_agency": false,
                  "_": false,
                  "registration_date": "2018-06-07T10:54:02.000-04:00",
                  "tags": [
                      "normal",
                      "credits_profile",
                      "mshops",
                      "messages_as_seller"
                  ],
                  "car_dealer_logo": "",
                  "permalink": "http://perfil.mercadolivre.com.br/MASTER+MEMORY",
                  "seller_reputation": {
                      "level_id": "5_green",
                      "power_seller_status": "platinum",
                      "transactions": {
                          "canceled": 5276,
                          "completed": 37948,
                          "period": "historic",
                          "ratings": {
                              "negative": 0.15,
                              "neutral": 0.02,
                              "positive": 0.83
                          },
                          "total": 43224
                      },
                      "metrics": {
                          "sales": {
                              "period": "60 days",
                              "completed": 4978
                          },
                          "claims": {
                              "period": "60 days",
                              "rate": 0.0089,
                              "value": 54
                          },
                          "delayed_handling_time": {
                              "period": "60 days",
                              "rate": 0.0245,
                              "value": 125
                          },
                          "cancellations": {
                              "period": "60 days",
                              "rate": 0.0028,
                              "value": 17
                          }
                      }
                  }
              },
              "seller_address": {
                  "comment": "",
                  "address_line": "",
                  "id": null,
                  "latitude": null,
                  "longitude": null,
                  "country": {
                      "id": "BR",
                      "name": "Brasil"
                  },
                  "state": {
                      "id": "BR-DF",
                      "name": "Distrito Federal"
                  },
                  "city": {
                      "id": "TUxCQ0JSQTU2M2Yy",
                      "name": "Brasília"
                  }
              },
              "address": {
                  "state_id": "BR-DF",
                  "state_name": "Distrito Federal",
                  "city_id": "TUxCQ0JSQTU2M2Yy",
                  "city_name": "Brasília"
              },
              "attributes": [
                  {
                      "id": "BRAND",
                      "name": "Marca",
                      "value_id": "10366",
                      "value_name": "Intelbras",
                      "attribute_group_id": "OTHERS",
                      "attribute_group_name": "Outros",
                      "value_struct": null,
                      "values": [
                          {
                              "id": "10366",
                              "name": "Intelbras",
                              "struct": null,
                              "source": 1
                          }
                      ],
                      "source": 1,
                      "value_type": "string"
                  },
                  {
                      "id": "ITEM_CONDITION",
                      "name": "Condição do item",
                      "value_id": "2230284",
                      "value_name": "Novo",
                      "attribute_group_id": "OTHERS",
                      "attribute_group_name": "Outros",
                      "value_struct": null,
                      "values": [
                          {
                              "id": "2230284",
                              "name": "Novo",
                              "struct": null,
                              "source": 2860837171021627
                          }
                      ],
                      "source": 2860837171021627,
                      "value_type": "list"
                  },
                  {
                      "id": "MODEL",
                      "name": "Modelo",
                      "value_id": "13444946",
                      "value_name": "4600164",
                      "attribute_group_id": "OTHERS",
                      "attribute_group_name": "Outros",
                      "value_struct": null,
                      "values": [
                          {
                              "id": "13444946",
                              "name": "4600164",
                              "struct": null,
                              "source": 1
                          }
                      ],
                      "source": 1,
                      "value_type": "string"
                  }
              ],
              "installments": {
                  "quantity": 12,
                  "amount": 14.09,
                  "rate": 16.64,
                  "currency_id": "BRL"
              },
              "winner_item_id": null,
              "catalog_listing": true,
              "discounts": null,
              "promotions": [],
              "inventory_id": null
          },
          {
              "id": "MLB1929971040",
              "title": "Mini Fone De Ouvido Sem Fio Bluetooth Ponto Eletrônico 1 Und",
              "condition": "new",
              "thumbnail_id": "786586-MLB47138465723_082021",
              "catalog_product_id": null,
              "listing_type_id": "gold_pro",
              "permalink": "https://produto.mercadolivre.com.br/MLB-1929971040-mini-fone-de-ouvido-sem-fio-bluetooth-ponto-eletrnico-1-und-_JM",
              "buying_mode": "buy_it_now",
              "site_id": "MLB",
              "category_id": "MLB7457",
              "domain_id": "MLB-HEADPHONES",
              "thumbnail": "http://http2.mlstatic.com/D_786586-MLB47138465723_082021-I.jpg",
              "currency_id": "BRL",
              "order_backend": 5,
              "price": 19.99,
              "original_price": null,
              "sale_price": null,
              "sold_quantity": 500,
              "available_quantity": 1,
              "official_store_id": null,
              "use_thumbnail_id": true,
              "accepts_mercadopago": true,
              "tags": [
                  "good_quality_picture",
                  "good_quality_thumbnail",
                  "immediate_payment",
                  "cart_eligible",
                  "best_seller_candidate",
                  "shipping_guaranteed"
              ],
              "variation_filters": [
                  "COLOR"
              ],
              "shipping": {
                  "store_pick_up": false,
                  "free_shipping": false,
                  "logistic_type": "fulfillment",
                  "mode": "me2",
                  "tags": [
                      "fulfillment",
                      "self_service_out"
                  ],
                  "promise": null
              },
              "stop_time": "2043-05-23T17:21:50.000Z",
              "seller": {
                  "id": 494790203,
                  "nickname": "SHRIMPORTADOR",
                  "car_dealer": false,
                  "real_estate_agency": false,
                  "_": false,
                  "registration_date": "2019-11-29T11:43:58.000-04:00",
                  "tags": [
                      "normal",
                      "mshops",
                      "credits_profile",
                      "messages_as_seller"
                  ],
                  "car_dealer_logo": "",
                  "permalink": "http://perfil.mercadolivre.com.br/SHRIMPORTADOR",
                  "seller_reputation": {
                      "level_id": "5_green",
                      "power_seller_status": "gold",
                      "transactions": {
                          "canceled": 1721,
                          "completed": 19922,
                          "period": "historic",
                          "ratings": {
                              "negative": 0.15,
                              "neutral": 0.01,
                              "positive": 0.84
                          },
                          "total": 21643
                      },
                      "metrics": {
                          "sales": {
                              "period": "60 days",
                              "completed": 3806
                          },
                          "claims": {
                              "period": "60 days",
                              "rate": 0.0034,
                              "value": 14
                          },
                          "delayed_handling_time": {
                              "period": "60 days",
                              "rate": 0.0055,
                              "value": 22
                          },
                          "cancellations": {
                              "period": "60 days",
                              "rate": 0.0002,
                              "value": 1
                          }
                      }
                  }
              },
              "seller_address": {
                  "comment": "",
                  "address_line": "",
                  "id": null,
                  "latitude": null,
                  "longitude": null,
                  "country": {
                      "id": "BR",
                      "name": "Brasil"
                  },
                  "state": {
                      "id": "BR-SP",
                      "name": "São Paulo"
                  },
                  "city": {
                      "id": "BR-SP-44",
                      "name": "São Paulo"
                  }
              },
              "address": {
                  "state_id": "BR-SP",
                  "state_name": "São Paulo",
                  "city_id": "BR-SP-44",
                  "city_name": "São Paulo"
              },
              "attributes": [
                  {
                      "id": "ALPHANUMERIC_MODEL",
                      "name": "Modelo alfanumérico",
                      "value_id": null,
                      "value_name": "S530",
                      "attribute_group_id": "OTHERS",
                      "attribute_group_name": "Outros",
                      "value_struct": null,
                      "values": [
                          {
                              "id": null,
                              "name": "S530",
                              "struct": null,
                              "source": 3045741222775799
                          }
                      ],
                      "source": 3045741222775799,
                      "value_type": "string"
                  },
                  {
                      "id": "BRAND",
                      "name": "Marca",
                      "value_id": "15722",
                      "value_name": "Universal",
                      "attribute_group_id": "OTHERS",
                      "attribute_group_name": "Outros",
                      "value_struct": null,
                      "values": [
                          {
                              "id": "15722",
                              "name": "Universal",
                              "struct": null,
                              "source": 3045741222775799
                          }
                      ],
                      "source": 3045741222775799,
                      "value_type": "string"
                  },
                  {
                      "id": "ITEM_CONDITION",
                      "name": "Condição do item",
                      "value_id": "2230284",
                      "value_name": "Novo",
                      "attribute_group_id": "OTHERS",
                      "attribute_group_name": "Outros",
                      "value_struct": null,
                      "values": [
                          {
                              "id": "2230284",
                              "name": "Novo",
                              "struct": null,
                              "source": 3045741222775799
                          }
                      ],
                      "source": 3045741222775799,
                      "value_type": "list"
                  },
                  {
                      "id": "LINE",
                      "name": "Linha",
                      "value_id": null,
                      "value_name": "FONE PONTO (UM LADO)",
                      "attribute_group_id": "OTHERS",
                      "attribute_group_name": "Outros",
                      "value_struct": null,
                      "values": [
                          {
                              "id": null,
                              "name": "FONE PONTO (UM LADO)",
                              "struct": null,
                              "source": 3045741222775799
                          }
                      ],
                      "source": 3045741222775799,
                      "value_type": "string"
                  },
                  {
                      "id": "MODEL",
                      "name": "Modelo",
                      "value_id": "11394861",
                      "value_name": "S530",
                      "attribute_group_id": "OTHERS",
                      "attribute_group_name": "Outros",
                      "value_struct": null,
                      "values": [
                          {
                              "id": "11394861",
                              "name": "S530",
                              "struct": null,
                              "source": 3045741222775799
                          }
                      ],
                      "source": 3045741222775799,
                      "value_type": "string"
                  }
              ],
              "variations_data": {
                  "89216961703": {
                      "thumbnail": "http://http2.mlstatic.com/D_786586-MLB47138465723_082021-O.jpg",
                      "ratio": "0.90",
                      "name": "Preto",
                      "pictures_qty": 8,
                      "inventory_id": "NHQO12047"
                  }
              },
              "installments": {
                  "quantity": 1,
                  "amount": 19.99,
                  "rate": 0,
                  "currency_id": "BRL"
              },
              "winner_item_id": null,
              "discounts": null,
              "promotions": [],
              "differential_pricing": {
                  "id": 35713369
              },
              "inventory_id": null
          },
          {
              "id": "MLB1225259990",
              "title": "Repelente Eletrônico Para Ratos E Morcegos 1000m²  Rem 3002",
              "condition": "new",
              "thumbnail_id": "763553-MLB30321314765_052019",
              "catalog_product_id": null,
              "listing_type_id": "gold_pro",
              "permalink": "https://produto.mercadolivre.com.br/MLB-1225259990-repelente-eletrnico-para-ratos-e-morcegos-1000m-rem-3002-_JM",
              "buying_mode": "buy_it_now",
              "site_id": "MLB",
              "category_id": "MLB122100",
              "domain_id": "MLB-MAT_AND_LIQUID_REPELLENT_ELECTRIC_DEVICES",
              "thumbnail": "http://http2.mlstatic.com/D_763553-MLB30321314765_052019-I.jpg",
              "currency_id": "BRL",
              "order_backend": 6,
              "price": 257.9,
              "original_price": null,
              "sale_price": null,
              "sold_quantity": 150,
              "available_quantity": 1,
              "official_store_id": null,
              "use_thumbnail_id": true,
              "accepts_mercadopago": true,
              "tags": [
                  "good_quality_thumbnail",
                  "brand_verified",
                  "good_quality_picture",
                  "immediate_payment",
                  "cart_eligible",
                  "shipping_guaranteed"
              ],
              "variation_filters": [
                  "VOLTAGE"
              ],
              "shipping": {
                  "store_pick_up": false,
                  "free_shipping": true,
                  "logistic_type": "cross_docking",
                  "mode": "me2",
                  "tags": [
                      "mandatory_free_shipping"
                  ],
                  "promise": null
              },
              "stop_time": "2042-11-11T19:08:09.000Z",
              "seller": {
                  "id": 142175613,
                  "nickname": "GARCIA_TEC",
                  "car_dealer": false,
                  "real_estate_agency": false,
                  "_": false,
                  "registration_date": "2013-07-16T08:25:07.000-04:00",
                  "tags": [
                      "normal",
                      "eshop",
                      "credits_profile",
                      "mshops",
                      "messages_as_seller"
                  ],
                  "car_dealer_logo": "",
                  "permalink": "http://perfil.mercadolivre.com.br/GARCIATEC+LONDRINA",
                  "seller_reputation": {
                      "level_id": "5_green",
                      "power_seller_status": "platinum",
                      "transactions": {
                          "canceled": 1350,
                          "completed": 18284,
                          "period": "historic",
                          "ratings": {
                              "negative": 0.08,
                              "neutral": 0.03,
                              "positive": 0.89
                          },
                          "total": 19634
                      },
                      "metrics": {
                          "sales": {
                              "period": "60 days",
                              "completed": 2913
                          },
                          "claims": {
                              "period": "60 days",
                              "rate": 0.0048,
                              "value": 15
                          },
                          "delayed_handling_time": {
                              "period": "60 days",
                              "rate": 0.0033,
                              "value": 10
                          },
                          "cancellations": {
                              "period": "60 days",
                              "rate": 0.0009,
                              "value": 3
                          }
                      }
                  },
                  "eshop": {
                      "eshop_id": 313854,
                      "seller": 142175613,
                      "nick_name": "GARCIA_TEC",
                      "eshop_status_id": 1,
                      "site_id": "MLB",
                      "eshop_experience": 0,
                      "eshop_rubro": null,
                      "eshop_locations": [],
                      "eshop_logo_url": "http://http2.mlstatic.com/eshops-logo/142175613v223a6a.png"
                  }
              },
              "seller_address": {
                  "comment": "",
                  "address_line": "",
                  "id": null,
                  "latitude": null,
                  "longitude": null,
                  "country": {
                      "id": "BR",
                      "name": "Brasil"
                  },
                  "state": {
                      "id": "BR-PR",
                      "name": "Paraná"
                  },
                  "city": {
                      "id": "TUxCQ0xPTmI2Njg1",
                      "name": "Londrina"
                  }
              },
              "address": {
                  "state_id": "BR-PR",
                  "state_name": "Paraná",
                  "city_id": "TUxCQ0xPTmI2Njg1",
                  "city_name": "Londrina"
              },
              "attributes": [
                  {
                      "id": "UNITS_PER_PACKAGE",
                      "name": "Unidades por embalagem",
                      "value_id": null,
                      "value_name": "1",
                      "attribute_group_id": "",
                      "attribute_group_name": "",
                      "value_struct": null,
                      "values": [
                          {
                              "id": null,
                              "name": "1",
                              "struct": null,
                              "source": 1572
                          }
                      ],
                      "source": 1572,
                      "value_type": "integer"
                  },
                  {
                      "id": "BRAND",
                      "name": "Marca",
                      "value_id": null,
                      "value_name": "MEGT",
                      "attribute_group_id": "OTHERS",
                      "attribute_group_name": "Outros",
                      "value_struct": null,
                      "values": [
                          {
                              "id": null,
                              "name": "MEGT",
                              "struct": null,
                              "source": 1572
                          }
                      ],
                      "source": 1572,
                      "value_type": "string"
                  },
                  {
                      "id": "ITEM_CONDITION",
                      "name": "Condição do item",
                      "value_id": "2230284",
                      "value_name": "Novo",
                      "attribute_group_id": "OTHERS",
                      "attribute_group_name": "Outros",
                      "value_struct": null,
                      "values": [
                          {
                              "id": "2230284",
                              "name": "Novo",
                              "struct": null,
                              "source": 1572
                          }
                      ],
                      "source": 1572,
                      "value_type": "list"
                  },
                  {
                      "id": "MODEL",
                      "name": "Modelo",
                      "value_id": null,
                      "value_name": "REM-3002",
                      "attribute_group_id": "OTHERS",
                      "attribute_group_name": "Outros",
                      "value_struct": null,
                      "values": [
                          {
                              "id": null,
                              "name": "REM-3002",
                              "struct": null,
                              "source": 1572
                          }
                      ],
                      "source": 1572,
                      "value_type": "string"
                  },
                  {
                      "id": "PACKAGE_LENGTH",
                      "name": "Comprimento da embalagem",
                      "value_id": null,
                      "value_name": "12.5 cm",
                      "attribute_group_id": "OTHERS",
                      "attribute_group_name": "Outros",
                      "value_struct": {
                          "number": 12.5,
                          "unit": "cm"
                      },
                      "values": [
                          {
                              "id": null,
                              "name": "12.5 cm",
                              "struct": {
                                  "number": 12.5,
                                  "unit": "cm"
                              },
                              "source": 4333789534002961
                          }
                      ],
                      "source": 4333789534002961,
                      "value_type": "number_unit"
                  },
                  {
                      "id": "PACKAGE_WEIGHT",
                      "name": "Peso da embalagem",
                      "value_id": null,
                      "value_name": "320 g",
                      "attribute_group_id": "OTHERS",
                      "attribute_group_name": "Outros",
                      "value_struct": {
                          "number": 320,
                          "unit": "g"
                      },
                      "values": [
                          {
                              "id": null,
                              "name": "320 g",
                              "struct": {
                                  "number": 320,
                                  "unit": "g"
                              },
                              "source": 4333789534002961
                          }
                      ],
                      "source": 4333789534002961,
                      "value_type": "number_unit"
                  }
              ],
              "variations_data": {
                  "178349682819": {
                      "thumbnail": "http://http2.mlstatic.com/D_763553-MLB30321314765_052019-O.jpg",
                      "ratio": "1.30",
                      "name": "",
                      "pictures_qty": 2
                  }
              },
              "installments": {
                  "quantity": 8,
                  "amount": 32.24,
                  "rate": 0,
                  "currency_id": "BRL"
              },
              "winner_item_id": null,
              "discounts": null,
              "promotions": [],
              "differential_pricing": {
                  "id": 35713364
              },
              "inventory_id": "MENA95926"
          },
          {
              "id": "MLB3231312871",
              "title": "Telefone Sem Fio Motorola Moto700 Preto",
              "condition": "new",
              "thumbnail_id": "946216-MLA32582979898_102019",
              "catalog_product_id": "MLB13263945",
              "listing_type_id": "gold_pro",
              "permalink": "https://www.mercadolivre.com.br/telefone-sem-fio-motorola-moto700-preto/p/MLB13263945",
              "buying_mode": "buy_it_now",
              "site_id": "MLB",
              "category_id": "MLB1053",
              "domain_id": "MLB-TELEPHONES",
              "thumbnail": "http://http2.mlstatic.com/D_946216-MLA32582979898_102019-I.jpg",
              "currency_id": "BRL",
              "order_backend": 7,
              "price": 170,
              "original_price": null,
              "sale_price": null,
              "sold_quantity": 500,
              "available_quantity": 1,
              "official_store_id": null,
              "use_thumbnail_id": true,
              "accepts_mercadopago": true,
              "tags": [
                  "extended_warranty_eligible",
                  "good_quality_thumbnail",
                  "immediate_payment",
                  "cart_eligible",
                  "best_seller_candidate",
                  "shipping_guaranteed"
              ],
              "shipping": {
                  "store_pick_up": false,
                  "free_shipping": true,
                  "logistic_type": "fulfillment",
                  "mode": "me2",
                  "tags": [
                      "fulfillment",
                      "mandatory_free_shipping"
                  ],
                  "promise": null
              },
              "stop_time": "2043-02-20T04:00:00.000Z",
              "seller": {
                  "id": 520614044,
                  "nickname": "XMS-ELETRONICOS",
                  "car_dealer": false,
                  "real_estate_agency": false,
                  "_": false,
                  "registration_date": "2020-01-30T13:10:20.000-04:00",
                  "tags": [
                      "normal",
                      "credits_profile",
                      "mshops",
                      "messages_as_seller"
                  ],
                  "car_dealer_logo": "",
                  "permalink": "http://perfil.mercadolivre.com.br/XMS-ELETRONICOS",
                  "seller_reputation": {
                      "level_id": "5_green",
                      "power_seller_status": "platinum",
                      "transactions": {
                          "canceled": 1088,
                          "completed": 12026,
                          "period": "historic",
                          "ratings": {
                              "negative": 0.05,
                              "neutral": 0.02,
                              "positive": 0.93
                          },
                          "total": 13114
                      },
                      "metrics": {
                          "sales": {
                              "period": "60 days",
                              "completed": 3509
                          },
                          "claims": {
                              "period": "60 days",
                              "rate": 0.0023,
                              "value": 9
                          },
                          "delayed_handling_time": {
                              "period": "60 days",
                              "rate": 0.0002,
                              "value": 1
                          },
                          "cancellations": {
                              "period": "60 days",
                              "rate": 0.0002,
                              "value": 1
                          }
                      }
                  }
              },
              "seller_address": {
                  "comment": "",
                  "address_line": "",
                  "id": null,
                  "latitude": null,
                  "longitude": null,
                  "country": {
                      "id": "BR",
                      "name": "Brasil"
                  },
                  "state": {
                      "id": "BR-SP",
                      "name": "São Paulo"
                  },
                  "city": {
                      "id": "BR-SP-76",
                      "name": "Tatuí"
                  }
              },
              "address": {
                  "state_id": "BR-SP",
                  "state_name": "São Paulo",
                  "city_id": "BR-SP-76",
                  "city_name": "Tatuí"
              },
              "attributes": [
                  {
                      "id": "BRAND",
                      "name": "Marca",
                      "value_id": "2503",
                      "value_name": "Motorola",
                      "attribute_group_id": "OTHERS",
                      "attribute_group_name": "Outros",
                      "value_struct": null,
                      "values": [
                          {
                              "id": "2503",
                              "name": "Motorola",
                              "struct": null,
                              "source": 1
                          }
                      ],
                      "source": 1,
                      "value_type": "string"
                  },
                  {
                      "id": "ITEM_CONDITION",
                      "name": "Condição do item",
                      "value_id": "2230284",
                      "value_name": "Novo",
                      "attribute_group_id": "OTHERS",
                      "attribute_group_name": "Outros",
                      "value_struct": null,
                      "values": [
                          {
                              "id": "2230284",
                              "name": "Novo",
                              "struct": null,
                              "source": 2860837171021627
                          }
                      ],
                      "source": 2860837171021627,
                      "value_type": "list"
                  },
                  {
                      "id": "MODEL",
                      "name": "Modelo",
                      "value_id": "2320982",
                      "value_name": "MOTO700",
                      "attribute_group_id": "OTHERS",
                      "attribute_group_name": "Outros",
                      "value_struct": null,
                      "values": [
                          {
                              "id": "2320982",
                              "name": "MOTO700",
                              "struct": null,
                              "source": 1
                          }
                      ],
                      "source": 1,
                      "value_type": "string"
                  },
                  {
                      "id": "PACKAGE_LENGTH",
                      "name": "Comprimento da embalagem",
                      "value_id": null,
                      "value_name": "15.5 cm",
                      "attribute_group_id": "OTHERS",
                      "attribute_group_name": "Outros",
                      "value_struct": {
                          "number": 15.5,
                          "unit": "cm"
                      },
                      "values": [
                          {
                              "id": null,
                              "name": "15.5 cm",
                              "struct": {
                                  "number": 15.5,
                                  "unit": "cm"
                              },
                              "source": 4333789534002961
                          }
                      ],
                      "source": 4333789534002961,
                      "value_type": "number_unit"
                  },
                  {
                      "id": "PACKAGE_WEIGHT",
                      "name": "Peso da embalagem",
                      "value_id": null,
                      "value_name": "310 g",
                      "attribute_group_id": "OTHERS",
                      "attribute_group_name": "Outros",
                      "value_struct": {
                          "number": 310,
                          "unit": "g"
                      },
                      "values": [
                          {
                              "id": null,
                              "name": "310 g",
                              "struct": {
                                  "number": 310,
                                  "unit": "g"
                              },
                              "source": 4333789534002961
                          }
                      ],
                      "source": 4333789534002961,
                      "value_type": "number_unit"
                  }
              ],
              "installments": {
                  "quantity": 5,
                  "amount": 34,
                  "rate": 0,
                  "currency_id": "BRL"
              },
              "winner_item_id": null,
              "catalog_listing": true,
              "discounts": null,
              "promotions": [],
              "differential_pricing": {
                  "id": 35713361
              },
              "inventory_id": "VDMA06659"
          },
          {
              "id": "MLB2796655904",
              "title": "Cofre Eletrônico Digital Teclado Com Senha + 2 Chaves To17",
              "condition": "new",
              "thumbnail_id": "784322-MLB51528876511_092022",
              "catalog_product_id": null,
              "listing_type_id": "gold_special",
              "permalink": "https://produto.mercadolivre.com.br/MLB-2796655904-cofre-eletrnico-digital-teclado-com-senha-2-chaves-to17-_JM",
              "buying_mode": "buy_it_now",
              "site_id": "MLB",
              "category_id": "MLB33430",
              "domain_id": "MLB-SAFES",
              "thumbnail": "http://http2.mlstatic.com/D_784322-MLB51528876511_092022-I.jpg",
              "currency_id": "BRL",
              "order_backend": 8,
              "price": 224.9,
              "original_price": null,
              "sale_price": null,
              "sold_quantity": 500,
              "available_quantity": 500,
              "official_store_id": null,
              "use_thumbnail_id": true,
              "accepts_mercadopago": true,
              "tags": [
                  "good_quality_thumbnail",
                  "extended_warranty_eligible",
                  "good_quality_picture",
                  "immediate_payment",
                  "cart_eligible"
              ],
              "variation_filters": [
                  "COLOR"
              ],
              "shipping": {
                  "store_pick_up": false,
                  "free_shipping": true,
                  "logistic_type": "cross_docking",
                  "mode": "me2",
                  "tags": [
                      "mandatory_free_shipping"
                  ],
                  "promise": null
              },
              "stop_time": "2042-09-08T04:00:00.000Z",
              "seller": {
                  "id": 212695661,
                  "nickname": "PEDROCK COML",
                  "car_dealer": false,
                  "real_estate_agency": false,
                  "_": false,
                  "registration_date": "2016-04-29T22:32:50.000-04:00",
                  "tags": [
                      "normal",
                      "credits_profile",
                      "messages_as_seller"
                  ],
                  "car_dealer_logo": "",
                  "permalink": "http://perfil.mercadolivre.com.br/PEDROCK+COML",
                  "seller_reputation": {
                      "level_id": "5_green",
                      "power_seller_status": null,
                      "transactions": {
                          "canceled": 238,
                          "completed": 7036,
                          "period": "historic",
                          "ratings": {
                              "negative": 0.03,
                              "neutral": 0,
                              "positive": 0.97
                          },
                          "total": 7274
                      },
                      "metrics": {
                          "sales": {
                              "period": "365 days",
                              "completed": 7036
                          },
                          "claims": {
                              "period": "365 days",
                              "rate": 0.0034,
                              "value": 25
                          },
                          "delayed_handling_time": {
                              "period": "365 days",
                              "rate": 0.0134,
                              "value": 96
                          },
                          "cancellations": {
                              "period": "365 days",
                              "rate": 0.0008,
                              "value": 6
                          }
                      }
                  }
              },
              "seller_address": {
                  "comment": "",
                  "address_line": "",
                  "id": null,
                  "latitude": null,
                  "longitude": null,
                  "country": {
                      "id": "BR",
                      "name": "Brasil"
                  },
                  "state": {
                      "id": "BR-SP",
                      "name": "São Paulo"
                  },
                  "city": {
                      "id": "BR-SP-44",
                      "name": "São Paulo"
                  }
              },
              "address": {
                  "state_id": "BR-SP",
                  "state_name": "São Paulo",
                  "city_id": "BR-SP-44",
                  "city_name": "São Paulo"
              },
              "attributes": [
                  {
                      "id": "BRAND",
                      "name": "Marca",
                      "value_id": "11565249",
                      "value_name": "Toaninni",
                      "attribute_group_id": "OTHERS",
                      "attribute_group_name": "Outros",
                      "value_struct": null,
                      "values": [
                          {
                              "id": "11565249",
                              "name": "Toaninni",
                              "struct": null,
                              "source": 1954489517989554
                          }
                      ],
                      "source": 1954489517989554,
                      "value_type": "string"
                  },
                  {
                      "id": "ITEM_CONDITION",
                      "name": "Condição do item",
                      "value_id": "2230284",
                      "value_name": "Novo",
                      "attribute_group_id": "OTHERS",
                      "attribute_group_name": "Outros",
                      "value_struct": null,
                      "values": [
                          {
                              "id": "2230284",
                              "name": "Novo",
                              "struct": null,
                              "source": 1
                          }
                      ],
                      "source": 1,
                      "value_type": "list"
                  },
                  {
                      "id": "MODEL",
                      "name": "Modelo",
                      "value_id": "4798734",
                      "value_name": "Cofre",
                      "attribute_group_id": "OTHERS",
                      "attribute_group_name": "Outros",
                      "value_struct": null,
                      "values": [
                          {
                              "id": "4798734",
                              "name": "Cofre",
                              "struct": null,
                              "source": 4060709329251625
                          }
                      ],
                      "source": 4060709329251625,
                      "value_type": "string"
                  },
                  {
                      "id": "WEIGHT",
                      "name": "Peso",
                      "value_id": "7943717",
                      "value_name": "2.94 kg",
                      "attribute_group_id": "OTHERS",
                      "attribute_group_name": "Outros",
                      "value_struct": {
                          "number": 2.94,
                          "unit": "kg"
                      },
                      "values": [
                          {
                              "id": "7943717",
                              "name": "2.94 kg",
                              "struct": {
                                  "number": 2.94,
                                  "unit": "kg"
                              },
                              "source": 1183438784296846
                          }
                      ],
                      "source": 1183438784296846,
                      "value_type": "number_unit"
                  }
              ],
              "variations_data": {
                  "175251714413": {
                      "thumbnail": "http://http2.mlstatic.com/D_784322-MLB51528876511_092022-O.jpg",
                      "ratio": "1.06",
                      "name": "Preto",
                      "pictures_qty": 4,
                      "inventory_id": "WVOJ36290"
                  }
              },
              "installments": {
                  "quantity": 12,
                  "amount": 21.86,
                  "rate": 16.64,
                  "currency_id": "BRL"
              },
              "winner_item_id": null,
              "discounts": null,
              "promotions": [],
              "inventory_id": null
          },
          {
              "id": "MLB3315073553",
              "title": "Fone De Ouvido Pmcell Fo-13",
              "condition": "new",
              "thumbnail_id": "922753-MLB44829770363_022021",
              "catalog_product_id": "MLB20226786",
              "listing_type_id": "gold_special",
              "permalink": "https://www.mercadolivre.com.br/fone-de-ouvido-pmcell-fo-13/p/MLB20226786",
              "buying_mode": "buy_it_now",
              "site_id": "MLB",
              "category_id": "MLB7457",
              "domain_id": "MLB-HEADPHONES",
              "thumbnail": "http://http2.mlstatic.com/D_922753-MLB44829770363_022021-I.jpg",
              "currency_id": "BRL",
              "order_backend": 9,
              "price": 14.05,
              "original_price": null,
              "sale_price": null,
              "sold_quantity": 4,
              "available_quantity": 1,
              "official_store_id": null,
              "use_thumbnail_id": true,
              "accepts_mercadopago": true,
              "tags": [
                  "immediate_payment",
                  "cart_eligible",
                  "shipping_guaranteed"
              ],
              "shipping": {
                  "store_pick_up": false,
                  "free_shipping": false,
                  "logistic_type": "fulfillment",
                  "mode": "me2",
                  "tags": [
                      "fulfillment"
                  ],
                  "promise": null
              },
              "stop_time": "2043-05-07T04:00:00.000Z",
              "seller": {
                  "id": 26410402,
                  "nickname": "DFS1988",
                  "car_dealer": false,
                  "real_estate_agency": false,
                  "_": false,
                  "registration_date": "2010-04-09T14:10:54.000-04:00",
                  "tags": [
                      "normal",
                      "credits_profile",
                      "eshop",
                      "mshops",
                      "messages_as_seller"
                  ],
                  "car_dealer_logo": "",
                  "permalink": "http://perfil.mercadolivre.com.br/AZSMART+OFICIAL",
                  "seller_reputation": {
                      "level_id": "5_green",
                      "power_seller_status": null,
                      "transactions": {
                          "canceled": 322,
                          "completed": 5875,
                          "period": "historic",
                          "ratings": {
                              "negative": 0.03,
                              "neutral": 0.02,
                              "positive": 0.95
                          },
                          "total": 6197
                      },
                      "metrics": {
                          "sales": {
                              "period": "60 days",
                              "completed": 1141
                          },
                          "claims": {
                              "period": "60 days",
                              "rate": 0.0107,
                              "value": 13
                          },
                          "delayed_handling_time": {
                              "period": "60 days",
                              "rate": 0.0096,
                              "value": 11
                          },
                          "cancellations": {
                              "period": "60 days",
                              "rate": 0,
                              "value": 0
                          }
                      }
                  },
                  "eshop": {
                      "eshop_id": 279331,
                      "seller": 26410402,
                      "nick_name": "DFS1988",
                      "eshop_status_id": 1,
                      "site_id": "MLB",
                      "eshop_experience": 0,
                      "eshop_rubro": null,
                      "eshop_locations": [],
                      "eshop_logo_url": "http://http2.mlstatic.com/eshops-logo/26410402vebd8b2.png"
                  }
              },
              "seller_address": {
                  "comment": "",
                  "address_line": "",
                  "id": null,
                  "latitude": null,
                  "longitude": null,
                  "country": {
                      "id": "BR",
                      "name": "Brasil"
                  },
                  "state": {
                      "id": "BR-SP",
                      "name": "São Paulo"
                  },
                  "city": {
                      "id": "BR-SP-15",
                      "name": "Limeira"
                  }
              },
              "address": {
                  "state_id": "BR-SP",
                  "state_name": "São Paulo",
                  "city_id": "BR-SP-15",
                  "city_name": "Limeira"
              },
              "attributes": [
                  {
                      "id": "BRAND",
                      "name": "Marca",
                      "value_id": "3467422",
                      "value_name": "Pmcell",
                      "attribute_group_id": "OTHERS",
                      "attribute_group_name": "Outros",
                      "value_struct": null,
                      "values": [
                          {
                              "id": "3467422",
                              "name": "Pmcell",
                              "struct": null,
                              "source": 1
                          }
                      ],
                      "source": 1,
                      "value_type": "string"
                  },
                  {
                      "id": "ITEM_CONDITION",
                      "name": "Condição do item",
                      "value_id": "2230284",
                      "value_name": "Novo",
                      "attribute_group_id": "OTHERS",
                      "attribute_group_name": "Outros",
                      "value_struct": null,
                      "values": [
                          {
                              "id": "2230284",
                              "name": "Novo",
                              "struct": null,
                              "source": 3045741222775799
                          }
                      ],
                      "source": 3045741222775799,
                      "value_type": "list"
                  },
                  {
                      "id": "LINE",
                      "name": "Linha",
                      "value_id": "8021291",
                      "value_name": "P2",
                      "attribute_group_id": "OTHERS",
                      "attribute_group_name": "Outros",
                      "value_struct": null,
                      "values": [
                          {
                              "id": "8021291",
                              "name": "P2",
                              "struct": null,
                              "source": 1
                          }
                      ],
                      "source": 1,
                      "value_type": "string"
                  },
                  {
                      "id": "MODEL",
                      "name": "Modelo",
                      "value_id": "14259503",
                      "value_name": "FO-13",
                      "attribute_group_id": "OTHERS",
                      "attribute_group_name": "Outros",
                      "value_struct": null,
                      "values": [
                          {
                              "id": "14259503",
                              "name": "FO-13",
                              "struct": null,
                              "source": 1
                          }
                      ],
                      "source": 1,
                      "value_type": "string"
                  },
                  {
                      "id": "PACKAGE_LENGTH",
                      "name": "Comprimento da embalagem",
                      "value_id": null,
                      "value_name": "20 cm",
                      "attribute_group_id": "OTHERS",
                      "attribute_group_name": "Outros",
                      "value_struct": {
                          "number": 20,
                          "unit": "cm"
                      },
                      "values": [
                          {
                              "id": null,
                              "name": "20 cm",
                              "struct": {
                                  "number": 20,
                                  "unit": "cm"
                              },
                              "source": 4333789534002961
                          }
                      ],
                      "source": 4333789534002961,
                      "value_type": "number_unit"
                  },
                  {
                      "id": "PACKAGE_WEIGHT",
                      "name": "Peso da embalagem",
                      "value_id": null,
                      "value_name": "30 g",
                      "attribute_group_id": "OTHERS",
                      "attribute_group_name": "Outros",
                      "value_struct": {
                          "number": 30,
                          "unit": "g"
                      },
                      "values": [
                          {
                              "id": null,
                              "name": "30 g",
                              "struct": {
                                  "number": 30,
                                  "unit": "g"
                              },
                              "source": 4333789534002961
                          }
                      ],
                      "source": 4333789534002961,
                      "value_type": "number_unit"
                  }
              ],
              "installments": {
                  "quantity": 12,
                  "amount": 1.36,
                  "rate": 16.34,
                  "currency_id": "BRL"
              },
              "winner_item_id": null,
              "catalog_listing": true,
              "discounts": null,
              "promotions": [],
              "inventory_id": "EVYK29294"
          },
          {
              "id": "MLB3333022779",
              "title": "Bobina Térmica Relógio Ponto Eletrônico Rep 57x300metros 6un",
              "condition": "new",
              "thumbnail_id": "831686-MLU69666368514_052023",
              "catalog_product_id": "MLB23524841",
              "listing_type_id": "gold_special",
              "permalink": "https://www.mercadolivre.com.br/bobina-termica-relogio-ponto-eletrnico-rep-57x300metros-6un/p/MLB23524841",
              "buying_mode": "buy_it_now",
              "site_id": "MLB",
              "category_id": "MLB105297",
              "domain_id": "MLB-SCHOOL_AND_OFFICE_PAPERS",
              "thumbnail": "http://http2.mlstatic.com/D_831686-MLU69666368514_052023-I.jpg",
              "currency_id": "BRL",
              "order_backend": 10,
              "price": 163.9,
              "original_price": null,
              "sale_price": null,
              "sold_quantity": 1,
              "available_quantity": 1,
              "official_store_id": null,
              "use_thumbnail_id": true,
              "accepts_mercadopago": true,
              "tags": [
                  "catalog_boost",
                  "good_quality_thumbnail",
                  "immediate_payment",
                  "cart_eligible",
                  "shipping_guaranteed"
              ],
              "shipping": {
                  "store_pick_up": false,
                  "free_shipping": true,
                  "logistic_type": "fulfillment",
                  "mode": "me2",
                  "tags": [
                      "fulfillment",
                      "mandatory_free_shipping"
                  ],
                  "promise": null
              },
              "stop_time": "2043-05-25T04:00:00.000Z",
              "seller": {
                  "id": 818214460,
                  "nickname": "EMPREENDIMENTOS VITORIA",
                  "car_dealer": false,
                  "real_estate_agency": false,
                  "_": false,
                  "registration_date": "2021-09-03T10:04:41.000-04:00",
                  "tags": [
                      "normal",
                      "mshops",
                      "credits_profile",
                      "messages_as_seller"
                  ],
                  "car_dealer_logo": "",
                  "permalink": "http://perfil.mercadolivre.com.br/EMPREENDIMENTOS+VITORIA",
                  "seller_reputation": {
                      "level_id": "5_green",
                      "power_seller_status": "gold",
                      "transactions": {
                          "canceled": 29,
                          "completed": 1461,
                          "period": "historic",
                          "ratings": {
                              "negative": 0,
                              "neutral": 0,
                              "positive": 1
                          },
                          "total": 1490
                      },
                      "metrics": {
                          "sales": {
                              "period": "60 days",
                              "completed": 722
                          },
                          "claims": {
                              "period": "60 days",
                              "rate": 0,
                              "value": 0
                          },
                          "delayed_handling_time": {
                              "period": "60 days",
                              "rate": 0,
                              "value": 0
                          },
                          "cancellations": {
                              "period": "60 days",
                              "rate": 0,
                              "value": 0
                          }
                      }
                  }
              },
              "seller_address": {
                  "comment": "",
                  "address_line": "",
                  "id": null,
                  "latitude": null,
                  "longitude": null,
                  "country": {
                      "id": "BR",
                      "name": "Brasil"
                  },
                  "state": {
                      "id": "BR-MG",
                      "name": "Minas Gerais"
                  },
                  "city": {
                      "id": "TUxCQ1RSRWIxNTg",
                      "name": "Três Pontas"
                  }
              },
              "address": {
                  "state_id": "BR-MG",
                  "state_name": "Minas Gerais",
                  "city_id": "TUxCQ1RSRWIxNTg",
                  "city_name": "Três Pontas"
              },
              "attributes": [
                  {
                      "id": "BRAND",
                      "name": "Marca",
                      "value_id": "17291943",
                      "value_name": "Thega DML",
                      "attribute_group_id": "OTHERS",
                      "attribute_group_name": "Outros",
                      "value_struct": null,
                      "values": [
                          {
                              "id": "17291943",
                              "name": "Thega DML",
                              "struct": null,
                              "source": 1
                          }
                      ],
                      "source": 1,
                      "value_type": "string"
                  },
                  {
                      "id": "ITEM_CONDITION",
                      "name": "Condição do item",
                      "value_id": "2230284",
                      "value_name": "Novo",
                      "attribute_group_id": "OTHERS",
                      "attribute_group_name": "Outros",
                      "value_struct": null,
                      "values": [
                          {
                              "id": "2230284",
                              "name": "Novo",
                              "struct": null,
                              "source": 2860837171021627
                          }
                      ],
                      "source": 2860837171021627,
                      "value_type": "list"
                  },
                  {
                      "id": "PACKAGE_LENGTH",
                      "name": "Comprimento da embalagem",
                      "value_id": null,
                      "value_name": "30 cm",
                      "attribute_group_id": "OTHERS",
                      "attribute_group_name": "Outros",
                      "value_struct": {
                          "number": 30,
                          "unit": "cm"
                      },
                      "values": [
                          {
                              "id": null,
                              "name": "30 cm",
                              "struct": {
                                  "unit": "cm",
                                  "number": 30
                              },
                              "source": 1
                          }
                      ],
                      "source": 1,
                      "value_type": "number_unit"
                  },
                  {
                      "id": "PACKAGE_WEIGHT",
                      "name": "Peso da embalagem",
                      "value_id": null,
                      "value_name": "4620 g",
                      "attribute_group_id": "OTHERS",
                      "attribute_group_name": "Outros",
                      "value_struct": {
                          "number": 4620,
                          "unit": "g"
                      },
                      "values": [
                          {
                              "id": null,
                              "name": "4620 g",
                              "struct": {
                                  "unit": "g",
                                  "number": 4620
                              },
                              "source": 1
                          }
                      ],
                      "source": 1,
                      "value_type": "number_unit"
                  },
                  {
                      "id": "SALE_FORMAT",
                      "name": "Formato de venda",
                      "value_id": "1359391",
                      "value_name": "Unidade",
                      "attribute_group_id": "OTHERS",
                      "attribute_group_name": "Outros",
                      "value_struct": null,
                      "values": [
                          {
                              "id": "1359391",
                              "name": "Unidade",
                              "struct": null,
                              "source": 1
                          }
                      ],
                      "source": 1,
                      "value_type": "list"
                  },
                  {
                      "id": "UNITS_PER_PACK",
                      "name": "Unidades por kit",
                      "value_id": "2726554",
                      "value_name": "1",
                      "attribute_group_id": "OTHERS",
                      "attribute_group_name": "Outros",
                      "value_struct": null,
                      "values": [
                          {
                              "id": "2726554",
                              "name": "1",
                              "struct": null,
                              "source": 1
                          }
                      ],
                      "source": 1,
                      "value_type": "number"
                  },
                  {
                      "id": "WEIGHT",
                      "name": "Peso",
                      "value_id": "517236",
                      "value_name": "4.8 kg",
                      "attribute_group_id": "OTHERS",
                      "attribute_group_name": "Outros",
                      "value_struct": {
                          "number": 4.8,
                          "unit": "kg"
                      },
                      "values": [
                          {
                              "id": "517236",
                              "name": "4.8 kg",
                              "struct": {
                                  "number": 4.8,
                                  "unit": "kg"
                              },
                              "source": 1
                          }
                      ],
                      "source": 1,
                      "value_type": "number_unit"
                  }
              ],
              "installments": {
                  "quantity": 12,
                  "amount": 15.93,
                  "rate": 16.64,
                  "currency_id": "BRL"
              },
              "winner_item_id": null,
              "catalog_listing": true,
              "discounts": null,
              "promotions": [],
              "inventory_id": "CYWD98937"
          }
      ],
      "sort": {
          "id": "relevance",
          "name": "Mais relevantes"
      },
      "available_sorts": [
          {
              "id": "price_asc",
              "name": "Menor preço"
          },
          {
              "id": "price_desc",
              "name": "Maior preço"
          }
      ],
      "filters": [],
      "available_filters": [
          {
              "id": "category",
              "name": "Categorias",
              "type": "text",
              "values": [
                  {
                      "id": "MLB1051",
                      "name": "Celulares e Telefones",
                      "results": 119412
                  },
                  {
                      "id": "MLB7069",
                      "name": "Segurança para Casa",
                      "results": 365568
                  },
                  {
                      "id": "MLB6999",
                      "name": "Componentes Eletrônicos",
                      "results": 1133716
                  },
                  {
                      "id": "MLB4900",
                      "name": "Pilhas e Carregadores",
                      "results": 201464
                  },
                  {
                      "id": "MLB5726",
                      "name": "Eletrodomésticos",
                      "results": 194132
                  },
                  {
                      "id": "MLB1500",
                      "name": "Construção",
                      "results": 138615
                  },
                  {
                      "id": "MLB1648",
                      "name": "Informática",
                      "results": 65641
                  },
                  {
                      "id": "MLB1613",
                      "name": "Banheiros",
                      "results": 60404
                  },
                  {
                      "id": "MLB1132",
                      "name": "Brinquedos e Hobbies",
                      "results": 60055
                  },
                  {
                      "id": "MLB264051",
                      "name": "Cuidado da Casa e Lavanderia",
                      "results": 46787
                  },
                  {
                      "id": "MLB1621",
                      "name": "Jardim e Ar Livre",
                      "results": 46787
                  },
                  {
                      "id": "MLB263532",
                      "name": "Ferramentas",
                      "results": 41200
                  },
                  {
                      "id": "MLB5672",
                      "name": "Acessórios para Veículos",
                      "results": 27932
                  },
                  {
                      "id": "MLB1499",
                      "name": "Indústria e Comércio",
                      "results": 21298
                  },
                  {
                      "id": "MLB1384",
                      "name": "Bebês",
                      "results": 19902
                  },
                  {
                      "id": "MLB3835",
                      "name": "Áudio",
                      "results": 15362
                  },
                  {
                      "id": "MLB1246",
                      "name": "Beleza e Cuidado Pessoal",
                      "results": 12569
                  },
                  {
                      "id": "MLB1631",
                      "name": "Enfeites e Decoração da Casa",
                      "results": 12569
                  },
                  {
                      "id": "MLB1582",
                      "name": "Iluminação Residencial",
                      "results": 12569
                  },
                  {
                      "id": "MLB1182",
                      "name": "Instrumentos Musicais",
                      "results": 12569
                  },
                  {
                      "id": "MLB1618",
                      "name": "Cozinha",
                      "results": 10125
                  },
                  {
                      "id": "MLB1368",
                      "name": "Arte, Papelaria e Armarinho",
                      "results": 7332
                  },
                  {
                      "id": "MLB264586",
                      "name": "Saúde",
                      "results": 6983
                  },
                  {
                      "id": "MLB1071",
                      "name": "Animais",
                      "results": 5586
                  },
                  {
                      "id": "MLB1276",
                      "name": "Esportes e Fitness",
                      "results": 5586
                  },
                  {
                      "id": "MLB322074",
                      "name": "Peças para TV",
                      "results": 5586
                  },
                  {
                      "id": "MLB10737",
                      "name": "Cabos",
                      "results": 2793
                  },
                  {
                      "id": "MLB1039",
                      "name": "Câmeras e Acessórios",
                      "results": 2793
                  },
                  {
                      "id": "MLB3937",
                      "name": "Joias e Relógios",
                      "results": 2793
                  },
                  {
                      "id": "MLB1196",
                      "name": "Livros, Revistas e Comics",
                      "results": 2793
                  },
                  {
                      "id": "MLB1953",
                      "name": "Mais Categorias",
                      "results": 2793
                  },
                  {
                      "id": "MLB1007",
                      "name": "Acessórios para TV",
                      "results": 1396
                  },
                  {
                      "id": "MLB436380",
                      "name": "Móveis para Casa",
                      "results": 1396
                  },
                  {
                      "id": "MLB1002",
                      "name": "Televisores",
                      "results": 1396
                  },
                  {
                      "id": "MLB4901",
                      "name": "Outros Eletrônicos",
                      "results": 65641
                  }
              ]
          },
          {
              "id": "discount",
              "name": "Descontos",
              "type": "number",
              "values": [
                  {
                      "id": "5-100",
                      "name": "Mais de 5% OFF",
                      "results": 607535
                  },
                  {
                      "id": "10-100",
                      "name": "Mais de 10% OFF",
                      "results": 379185
                  },
                  {
                      "id": "15-100",
                      "name": "Mais de 15% OFF",
                      "results": 93923
                  },
                  {
                      "id": "20-100",
                      "name": "Mais de 20% OFF",
                      "results": 56563
                  },
                  {
                      "id": "25-100",
                      "name": "Mais de 25% OFF",
                      "results": 36312
                  },
                  {
                      "id": "30-100",
                      "name": "Mais de 30% OFF",
                      "results": 24790
                  },
                  {
                      "id": "40-100",
                      "name": "Mais de 40% OFF",
                      "results": 7681
                  },
                  {
                      "id": "50-100",
                      "name": "Mais de 50% OFF",
                      "results": 4539
                  }
              ]
          },
          {
              "id": "price",
              "name": "Preço",
              "type": "range",
              "values": [
                  {
                      "id": "*-40.0",
                      "name": "Até R$ 40",
                      "results": 799921
                  },
                  {
                      "id": "40.0-100.0",
                      "name": "R$40 a R$100",
                      "results": 635817
                  },
                  {
                      "id": "100.0-*",
                      "name": "Mais de R$100",
                      "results": 1146635
                  }
              ]
          },
          {
              "id": "accepts_mercadopago",
              "name": "Filtro por MercadoPago",
              "type": "boolean",
              "values": [
                  {
                      "id": "yes",
                      "name": "Com Mercado Pago",
                      "results": 2582374
                  }
              ]
          },
          {
              "id": "installments",
              "name": "Pagamento",
              "type": "text",
              "values": [
                  {
                      "id": "yes",
                      "name": "Pagamento parcelado",
                      "results": 2579581
                  },
                  {
                      "id": "no_interest",
                      "name": "Sem juros",
                      "results": 988467
                  }
              ]
          },
          {
              "id": "shipping",
              "name": "Tipo de envio",
              "type": "text",
              "values": [
                  {
                      "id": "mercadoenvios",
                      "name": "Mercado Envios",
                      "results": 2580978
                  },
                  {
                      "id": "fulfillment",
                      "name": "Full",
                      "results": 638610
                  }
              ]
          },
          {
              "id": "power_seller",
              "name": "Filtro MercadoLíderes",
              "type": "boolean",
              "values": [
                  {
                      "id": "yes",
                      "name": "Melhores vendedores",
                      "results": 1969601
                  }
              ]
          },
          {
              "id": "since",
              "name": "Filtro por data de início",
              "type": "text",
              "values": [
                  {
                      "id": "today",
                      "name": "Anunciados hoje",
                      "results": 2793
                  }
              ]
          },
          {
              "id": "has_video",
              "name": "Filtro por publicações com vídeo",
              "type": "boolean",
              "values": [
                  {
                      "id": "yes",
                      "name": "Publicações com vídeo",
                      "results": 657465
                  }
              ]
          },
          {
              "id": "has_pictures",
              "name": "Filtro por publicação com imagens",
              "type": "boolean",
              "values": [
                  {
                      "id": "yes",
                      "name": "Com fotos",
                      "results": 2582374
                  }
              ]
          },
          {
              "id": "all_payment_methods_discount",
              "name": "Descuentos para todos los medios de pago",
              "type": "number",
              "values": [
                  {
                      "id": "1-100",
                      "name": "Mais de 1% OFF",
                      "results": 249997
                  },
                  {
                      "id": "5-100",
                      "name": "Mais de 5% OFF",
                      "results": 245807
                  },
                  {
                      "id": "10-100",
                      "name": "Mais de 10% OFF",
                      "results": 231142
                  },
                  {
                      "id": "15-100",
                      "name": "Mais de 15% OFF",
                      "results": 12569
                  },
                  {
                      "id": "25-100",
                      "name": "Mais de 25% OFF",
                      "results": 6983
                  },
                  {
                      "id": "30-100",
                      "name": "Mais de 30% OFF",
                      "results": 5586
                  }
              ]
          },
          {
              "id": "price_campaign_id",
              "name": "Campanha",
              "type": "number",
              "values": [
                  {
                      "id": "MLB18040",
                      "name": "MLB18040",
                      "results": 2793
                  },
                  {
                      "id": "P-MLB11385002",
                      "name": "P-MLB11385002",
                      "results": 1047
                  },
                  {
                      "id": "MLB17917",
                      "name": "MLB17917",
                      "results": 1047
                  },
                  {
                      "id": "P-MLB11331084",
                      "name": "P-MLB11331084",
                      "results": 349
                  },
                  {
                      "id": "P-MLB11331086",
                      "name": "P-MLB11331086",
                      "results": 349
                  },
                  {
                      "id": "P-MLB11331074",
                      "name": "P-MLB11331074",
                      "results": 349
                  },
                  {
                      "id": "P-MLB11393042",
                      "name": "P-MLB11393042",
                      "results": 349
                  },
                  {
                      "id": "P-MLB11363018",
                      "name": "P-MLB11363018",
                      "results": 349
                  }
              ]
          },
          {
              "id": "promotion_type",
              "name": "Tipo de promoção",
              "type": "text",
              "values": [
                  {
                      "id": "deal_of_the_day",
                      "name": "Oferta do dia",
                      "results": 1047
                  },
                  {
                      "id": "lightning",
                      "name": "Oferta relâmpago",
                      "results": 698
                  }
              ]
          },
          {
              "id": "shipping_cost",
              "name": "Custo do frete",
              "type": "text",
              "values": [
                  {
                      "id": "free",
                      "name": "Gratis",
                      "results": 1243352
                  }
              ]
          },
          {
              "id": "BRAND",
              "name": "Marca",
              "type": "STRING",
              "values": [
                  {
                      "id": "10366",
                      "name": "Intelbras",
                      "results": 243
                  },
                  {
                      "id": "276243",
                      "name": "Genérica",
                      "results": 114
                  },
                  {
                      "id": "18538286",
                      "name": "CP Placas Eletrônicas",
                      "results": 105
                  },
                  {
                      "id": "515753",
                      "name": "PPA",
                      "results": 72
                  },
                  {
                      "id": "348085",
                      "name": "Lorenzetti",
                      "results": 63
                  },
                  {
                      "id": "9103816",
                      "name": "Importado",
                      "results": 54
                  },
                  {
                      "id": "7512",
                      "name": "Hydra",
                      "results": 51
                  },
                  {
                      "id": "2891253",
                      "name": "AGL",
                      "results": 51
                  },
                  {
                      "id": "188",
                      "name": "Electrolux",
                      "results": 42
                  },
                  {
                      "id": "2445255",
                      "name": "HDL",
                      "results": 36
                  },
                  {
                      "id": "13364506",
                      "name": "ST",
                      "results": 36
                  },
                  {
                      "id": "59772",
                      "name": "OEM",
                      "results": 33
                  },
                  {
                      "id": "104585",
                      "name": "Makita",
                      "results": 33
                  },
                  {
                      "id": "8",
                      "name": "Panasonic",
                      "results": 30
                  },
                  {
                      "id": "515755",
                      "name": "Peccinin",
                      "results": 30
                  },
                  {
                      "id": "4522991",
                      "name": "Citex",
                      "results": 30
                  },
                  {
                      "id": "2757057",
                      "name": "Rossi",
                      "results": 30
                  },
                  {
                      "id": "1180961",
                      "name": "WEG",
                      "results": 30
                  },
                  {
                      "id": "1156686",
                      "name": "Metaltex",
                      "results": 30
                  },
                  {
                      "id": "4826901",
                      "name": "Fortek",
                      "results": 27
                  },
                  {
                      "id": "2786002",
                      "name": "Original",
                      "results": 27
                  },
                  {
                      "id": "5333037",
                      "name": "IPEC",
                      "results": 24
                  },
                  {
                      "id": "3",
                      "name": "Philips",
                      "results": 24
                  },
                  {
                      "id": "2924359",
                      "name": "MarGirius",
                      "results": 24
                  },
                  {
                      "id": "102992",
                      "name": "Elgin",
                      "results": 24
                  },
                  {
                      "id": "479",
                      "name": "Philco",
                      "results": 21
                  },
                  {
                      "id": "41446",
                      "name": "Philips Walita",
                      "results": 21
                  },
                  {
                      "id": "2997256",
                      "name": "Zagonel",
                      "results": 21
                  },
                  {
                      "id": "2455874",
                      "name": "Thevear",
                      "results": 21
                  },
                  {
                      "id": "16588712",
                      "name": "Adtek",
                      "results": 21
                  },
                  {
                      "id": "122707",
                      "name": "ChipSCE",
                      "results": 21
                  },
                  {
                      "id": "4480023",
                      "name": "Digimec",
                      "results": 18
                  },
                  {
                      "id": "261196",
                      "name": "RCG",
                      "results": 18
                  },
                  {
                      "id": "206",
                      "name": "Samsung",
                      "results": 18
                  },
                  {
                      "id": "1160873",
                      "name": "Candide",
                      "results": 18
                  },
                  {
                      "id": "10852476",
                      "name": "Lider",
                      "results": 18
                  },
                  {
                      "id": "8566568",
                      "name": "RY",
                      "results": 15
                  },
                  {
                      "id": "4946",
                      "name": "Bosch",
                      "results": 15
                  },
                  {
                      "id": "428254",
                      "name": "Omron",
                      "results": 15
                  },
                  {
                      "id": "4131280",
                      "name": "Sibratec",
                      "results": 15
                  },
                  {
                      "id": "2986693",
                      "name": "Garen",
                      "results": 15
                  },
                  {
                      "id": "2891255",
                      "name": "Amelco",
                      "results": 15
                  },
                  {
                      "id": "2804265",
                      "name": "SM",
                      "results": 15
                  },
                  {
                      "id": "1823",
                      "name": "Epson",
                      "results": 15
                  },
                  {
                      "id": "15926",
                      "name": "Texas",
                      "results": 15
                  },
                  {
                      "id": "10486437",
                      "name": "TakTark",
                      "results": 15
                  },
                  {
                      "id": "1033072",
                      "name": "DeWalt",
                      "results": 15
                  },
                  {
                      "id": "79511",
                      "name": "Tem",
                      "results": 12
                  },
                  {
                      "id": "7312371",
                      "name": "ARPE",
                      "results": 12
                  },
                  {
                      "id": "6852047",
                      "name": "Ya Xun",
                      "results": 12
                  },
                  {
                      "id": "6618929",
                      "name": "Fonte",
                      "results": 12
                  },
                  {
                      "id": "5885860",
                      "name": "Sumexr",
                      "results": 12
                  },
                  {
                      "id": "5259374",
                      "name": "Top",
                      "results": 12
                  },
                  {
                      "id": "471",
                      "name": "Britânia",
                      "results": 12
                  },
                  {
                      "id": "432798",
                      "name": "Taschibra",
                      "results": 12
                  },
                  {
                      "id": "3862964",
                      "name": "GC",
                      "results": 12
                  },
                  {
                      "id": "3314392",
                      "name": "Nacional",
                      "results": 12
                  },
                  {
                      "id": "3310998",
                      "name": "CDI",
                      "results": 12
                  },
                  {
                      "id": "2891271",
                      "name": "Protection",
                      "results": 12
                  },
                  {
                      "id": "2833483",
                      "name": "Luatek",
                      "results": 12
                  },
                  {
                      "id": "232",
                      "name": "Sanyo",
                      "results": 12
                  },
                  {
                      "id": "215",
                      "name": "LG",
                      "results": 12
                  },
                  {
                      "id": "2149465",
                      "name": "Black+Decker",
                      "results": 12
                  },
                  {
                      "id": "2045",
                      "name": "Toshiba",
                      "results": 12
                  },
                  {
                      "id": "195091",
                      "name": "Hikvision",
                      "results": 12
                  },
                  {
                      "id": "189872",
                      "name": "Western",
                      "results": 12
                  },
                  {
                      "id": "179492",
                      "name": "Infineon",
                      "results": 12
                  },
                  {
                      "id": "140055",
                      "name": "Knup",
                      "results": 12
                  },
                  {
                      "id": "12103721",
                      "name": "On",
                      "results": 12
                  },
                  {
                      "id": "11565249",
                      "name": "Toaninni",
                      "results": 12
                  },
                  {
                      "id": "11323380",
                      "name": "PCI Eletro",
                      "results": 12
                  },
                  {
                      "id": "97494",
                      "name": "Agratto",
                      "results": 9
                  },
                  {
                      "id": "92628",
                      "name": "Colormaq",
                      "results": 9
                  },
                  {
                      "id": "7312368",
                      "name": "Sanyou",
                      "results": 9
                  },
                  {
                      "id": "5986",
                      "name": "Brother",
                      "results": 9
                  },
                  {
                      "id": "597",
                      "name": "Saeco",
                      "results": 9
                  },
                  {
                      "id": "5538795",
                      "name": "BAP Energy",
                      "results": 9
                  },
                  {
                      "id": "4786717",
                      "name": "International Rectifier",
                      "results": 9
                  },
                  {
                      "id": "4786709",
                      "name": "Fairchild",
                      "results": 9
                  },
                  {
                      "id": "45099",
                      "name": "Aquário",
                      "results": 9
                  },
                  {
                      "id": "4480019",
                      "name": "Coel",
                      "results": 9
                  },
                  {
                      "id": "403607",
                      "name": "Yale",
                      "results": 9
                  },
                  {
                      "id": "402709",
                      "name": "Springer Midea",
                      "results": 9
                  },
                  {
                      "id": "3929662",
                      "name": "Buba",
                      "results": 9
                  },
                  {
                      "id": "3266504",
                      "name": "Welmy",
                      "results": 9
                  },
                  {
                      "id": "3189974",
                      "name": "Rontek",
                      "results": 9
                  },
                  {
                      "id": "2941243",
                      "name": "Nice",
                      "results": 9
                  },
                  {
                      "id": "2856799",
                      "name": "Finder",
                      "results": 9
                  },
                  {
                      "id": "2642957",
                      "name": "KDT",
                      "results": 9
                  },
                  {
                      "id": "2503",
                      "name": "Motorola",
                      "results": 9
                  },
                  {
                      "id": "2286577",
                      "name": "Sonoff",
                      "results": 9
                  },
                  {
                      "id": "15722",
                      "name": "Universal",
                      "results": 9
                  },
                  {
                      "id": "13553415",
                      "name": "Patola",
                      "results": 9
                  },
                  {
                      "id": "13510569",
                      "name": "Injetech",
                      "results": 9
                  },
                  {
                      "id": "1237593",
                      "name": "Schneider Electric",
                      "results": 9
                  },
                  {
                      "id": "11172219",
                      "name": "Mean Well",
                      "results": 9
                  },
                  {
                      "id": "1066551",
                      "name": "Importway",
                      "results": 9
                  },
                  {
                      "id": "10447040",
                      "name": "Energy Lux",
                      "results": 9
                  },
                  {
                      "id": "9862885",
                      "name": "Fas",
                      "results": 6
                  },
                  {
                      "id": "897773",
                      "name": "Rinnai",
                      "results": 6
                  },
                  {
                      "id": "8695792",
                      "name": "Polar Equipamentos",
                      "results": 6
                  },
                  {
                      "id": "85327",
                      "name": "Fame",
                      "results": 6
                  },
                  {
                      "id": "8058133",
                      "name": "Klub",
                      "results": 6
                  },
                  {
                      "id": "7343037",
                      "name": "Fotek",
                      "results": 6
                  },
                  {
                      "id": "7312366",
                      "name": "Altronic",
                      "results": 6
                  },
                  {
                      "id": "6189851",
                      "name": "MCM",
                      "results": 6
                  },
                  {
                      "id": "6089830",
                      "name": "CQC",
                      "results": 6
                  },
                  {
                      "id": "5936960",
                      "name": "Gptronics",
                      "results": 6
                  },
                  {
                      "id": "5725513",
                      "name": "Diymore",
                      "results": 6
                  },
                  {
                      "id": "5719772",
                      "name": "Chipstar",
                      "results": 6
                  },
                  {
                      "id": "5681511",
                      "name": "Implastec",
                      "results": 6
                  },
                  {
                      "id": "5581463",
                      "name": "MS",
                      "results": 6
                  },
                  {
                      "id": "5300257",
                      "name": "ZEM",
                      "results": 6
                  },
                  {
                      "id": "5044670",
                      "name": "MagnaChip",
                      "results": 6
                  },
                  {
                      "id": "49944",
                      "name": "HP",
                      "results": 6
                  },
                  {
                      "id": "497716",
                      "name": "Nautika",
                      "results": 6
                  },
                  {
                      "id": "4972276",
                      "name": "Fun",
                      "results": 6
                  },
                  {
                      "id": "4897",
                      "name": "Taiff",
                      "results": 6
                  },
                  {
                      "id": "4786739",
                      "name": "STMicroelectronics",
                      "results": 6
                  },
                  {
                      "id": "455",
                      "name": "Arno",
                      "results": 6
                  },
                  {
                      "id": "4335130",
                      "name": "RG Led",
                      "results": 6
                  },
                  {
                      "id": "3994142",
                      "name": "Energy Power",
                      "results": 6
                  },
                  {
                      "id": "3902970",
                      "name": "Novo",
                      "results": 6
                  },
                  {
                      "id": "3817468",
                      "name": "ALC",
                      "results": 6
                  },
                  {
                      "id": "351",
                      "name": "Brastemp",
                      "results": 6
                  },
                  {
                      "id": "3379995",
                      "name": "Retekess",
                      "results": 6
                  },
                  {
                      "id": "3233053",
                      "name": "PM Cofres",
                      "results": 6
                  },
                  {
                      "id": "31163",
                      "name": "Multilaser",
                      "results": 6
                  },
                  {
                      "id": "3104350",
                      "name": "Sintex",
                      "results": 6
                  },
                  {
                      "id": "31001",
                      "name": "Semp Toshiba",
                      "results": 6
                  },
                  {
                      "id": "2934320",
                      "name": "AFR",
                      "results": 6
                  },
                  {
                      "id": "2785980",
                      "name": "Storm",
                      "results": 6
                  },
                  {
                      "id": "2751633",
                      "name": "Novus",
                      "results": 6
                  },
                  {
                      "id": "2705251",
                      "name": "DM Toys",
                      "results": 6
                  },
                  {
                      "id": "2668409",
                      "name": "DNI",
                      "results": 6
                  },
                  {
                      "id": "260751",
                      "name": "Inova",
                      "results": 6
                  },
                  {
                      "id": "2534854",
                      "name": "LS",
                      "results": 6
                  },
                  {
                      "id": "2475311",
                      "name": "Power",
                      "results": 6
                  },
                  {
                      "id": "2295694",
                      "name": "Estrela",
                      "results": 6
                  },
                  {
                      "id": "2153976",
                      "name": "MXT",
                      "results": 6
                  },
                  {
                      "id": "18939497",
                      "name": "ST-Link",
                      "results": 6
                  },
                  {
                      "id": "168271",
                      "name": "Moura",
                      "results": 6
                  },
                  {
                      "id": "16509",
                      "name": "Lite-On",
                      "results": 6
                  },
                  {
                      "id": "16495498",
                      "name": "NXP",
                      "results": 6
                  },
                  {
                      "id": "15375",
                      "name": "Energizer",
                      "results": 6
                  },
                  {
                      "id": "14004570",
                      "name": "Importweb",
                      "results": 6
                  },
                  {
                      "id": "139113",
                      "name": "MB",
                      "results": 6
                  },
                  {
                      "id": "13628330",
                      "name": "ZX",
                      "results": 6
                  },
                  {
                      "id": "13510590",
                      "name": "Nobre Brasil",
                      "results": 6
                  },
                  {
                      "id": "12223442",
                      "name": "Kapbom",
                      "results": 6
                  },
                  {
                      "id": "12132340",
                      "name": "IR",
                      "results": 6
                  },
                  {
                      "id": "12046559",
                      "name": "SchWeers",
                      "results": 6
                  },
                  {
                      "id": "118681",
                      "name": "IPC",
                      "results": 6
                  },
                  {
                      "id": "11445804",
                      "name": "MGA Entertainment",
                      "results": 6
                  },
                  {
                      "id": "11410665",
                      "name": "It-Blue",
                      "results": 6
                  },
                  {
                      "id": "1119283",
                      "name": "Stam",
                      "results": 6
                  },
                  {
                      "id": "9982425",
                      "name": "Amira",
                      "results": 3
                  },
                  {
                      "id": "995",
                      "name": "Sony",
                      "results": 3
                  },
                  {
                      "id": "98590",
                      "name": "Master",
                      "results": 3
                  },
                  {
                      "id": "9838",
                      "name": "Pioneer",
                      "results": 3
                  },
                  {
                      "id": "9217563",
                      "name": "Fun Game",
                      "results": 3
                  },
                  {
                      "id": "9123208",
                      "name": "SBP",
                      "results": 3
                  },
                  {
                      "id": "9120",
                      "name": "Caloi",
                      "results": 3
                  },
                  {
                      "id": "8911591",
                      "name": "Bring It",
                      "results": 3
                  },
                  {
                      "id": "8726122",
                      "name": "Topen Home",
                      "results": 3
                  },
                  {
                      "id": "8724156",
                      "name": "Fast",
                      "results": 3
                  },
                  {
                      "id": "8152109",
                      "name": "Epever",
                      "results": 3
                  },
                  {
                      "id": "8139908",
                      "name": "Lucky Amazonia",
                      "results": 3
                  },
                  {
                      "id": "81278",
                      "name": "Amvox",
                      "results": 3
                  },
                  {
                      "id": "81159",
                      "name": "Venax",
                      "results": 3
                  },
                  {
                      "id": "8042036",
                      "name": "Lig Light",
                      "results": 3
                  },
                  {
                      "id": "79956",
                      "name": "Latina",
                      "results": 3
                  },
                  {
                      "id": "7855833",
                      "name": "Intel",
                      "results": 3
                  },
                  {
                      "id": "7701288",
                      "name": "Wr",
                      "results": 3
                  },
                  {
                      "id": "7655",
                      "name": "Conair",
                      "results": 3
                  },
                  {
                      "id": "7563234",
                      "name": "Azy Comercial",
                      "results": 3
                  },
                  {
                      "id": "7373464",
                      "name": "Brazil Control",
                      "results": 3
                  },
                  {
                      "id": "7355124",
                      "name": "Songle",
                      "results": 3
                  },
                  {
                      "id": "7352578",
                      "name": "Tianbo",
                      "results": 3
                  },
                  {
                      "id": "7342021",
                      "name": "Schmersal",
                      "results": 3
                  },
                  {
                      "id": "7218747",
                      "name": "Control ID",
                      "results": 3
                  },
                  {
                      "id": "7173388",
                      "name": "AMS",
                      "results": 3
                  },
                  {
                      "id": "7040308",
                      "name": "Shenzhen",
                      "results": 3
                  },
                  {
                      "id": "6886209",
                      "name": "MM",
                      "results": 3
                  },
                  {
                      "id": "6880120",
                      "name": "Lartec",
                      "results": 3
                  },
                  {
                      "id": "6866402",
                      "name": "RF",
                      "results": 3
                  },
                  {
                      "id": "6729605",
                      "name": "Pró Euro",
                      "results": 3
                  },
                  {
                      "id": "6662907",
                      "name": "Nehc",
                      "results": 3
                  },
                  {
                      "id": "6572564",
                      "name": "Hamy",
                      "results": 3
                  },
                  {
                      "id": "6478",
                      "name": "Royal",
                      "results": 3
                  }
              ]
          },
          {
              "id": "ITEM_CONDITION",
              "name": "Condição",
              "type": "STRING",
              "values": [
                  {
                      "id": "2230284",
                      "name": "Novo",
                      "results": 2013246
                  }
              ]
          },
          {
              "id": "SHIPPING_ORIGIN",
              "name": "Tipo de compra",
              "type": "STRING",
              "values": [
                  {
                      "id": "10215068",
                      "name": "Local",
                      "results": 2013246
                  },
                  {
                      "id": "10215069",
                      "name": "Internacional",
                      "results": 2094
                  }
              ]
          },
          {
              "id": "adult_content",
              "name": "Filtro de conteúdo para adultos",
              "type": "boolean",
              "values": [
                  {
                      "id": "yes",
                      "name": "Conteúdo para adultos",
                      "results": 404
                  }
              ]
          },
          {
              "id": "official_store",
              "name": "Lojas oficiais",
              "type": "text",
              "values": [
                  {
                      "id": "all",
                      "name": "Todas as Lojas oficiais",
                      "results": 277580
                  },
                  {
                      "id": "5535",
                      "name": "WPE Eletronicos",
                      "results": 15362
                  },
                  {
                      "id": "5370",
                      "name": "Helplo",
                      "results": 7332
                  },
                  {
                      "id": "5102",
                      "name": "Rmaistech",
                      "results": 3142
                  },
                  {
                      "id": "5106",
                      "name": "PCI Eletro",
                      "results": 3142
                  },
                  {
                      "id": "2707",
                      "name": "Mercado Livre",
                      "results": 1745
                  },
                  {
                      "id": "4734",
                      "name": "Elgin",
                      "results": 1745
                  },
                  {
                      "id": "5126",
                      "name": "Tork Tools",
                      "results": 1745
                  },
                  {
                      "id": "5541",
                      "name": "Azzax",
                      "results": 1745
                  },
                  {
                      "id": "3965",
                      "name": "Buy N Pay",
                      "results": 349
                  },
                  {
                      "id": "4457",
                      "name": "Polibrinq",
                      "results": 349
                  },
                  {
                      "id": "50074",
                      "name": "Lorben",
                      "results": 349
                  },
                  {
                      "id": "5547",
                      "name": "Ninja Parts SC",
                      "results": 349
                  }
              ]
          },
          {
              "id": "product",
              "name": "Produto",
              "type": "text",
              "values": [
                  {
                      "id": "MLB17449996",
                      "name": "KDT Aquecedor Central Digital Elétrica",
                      "results": 3142
                  },
                  {
                      "id": "MLB8065964",
                      "name": "Intelbras TS 5123",
                      "results": 3142
                  },
                  {
                      "id": "MLB19888573",
                      "name": "BEDIN BDF-12",
                      "results": 2094
                  },
                  {
                      "id": "MLB14421010",
                      "name": "Intelbras TS 2510",
                      "results": 1745
                  },
                  {
                      "id": "MLB15834420",
                      "name": "Panasonic KX-TGC220LBB",
                      "results": 1745
                  },
                  {
                      "id": "MLB8065965",
                      "name": "Telefone sem fio Intelbras TS 5123 preto",
                      "results": 1745
                  },
                  {
                      "id": "MLB19748097",
                      "name": "Sumexr Headset Celular, Academia, Android, Áudio, Auricular, Barato, Bluetooth, Caminhada, Corrida, Eletrônicos, Esportes, Fone, Fone De Ouvido, Garantia, Infantil, Intra Auricular, Ios, Lightning, Ma",
                      "results": 1396
                  },
                  {
                      "id": "MLB19766720",
                      "name": "Cartão Micro Sd Intelbras 128gb 64tbw P Segurança Eletrônica",
                      "results": 1047
                  },
                  {
                      "id": "MLB8044961",
                      "name": "Elgin TSF 8001",
                      "results": 698
                  },
                  {
                      "id": "MLB13185745",
                      "name": "Motorola MOTO700",
                      "results": 349
                  },
                  {
                      "id": "MLB13263945",
                      "name": "Telefone sem fio Motorola MOTO700 preto",
                      "results": 349
                  },
                  {
                      "id": "MLB14421011",
                      "name": "Telefone sem fio Intelbras TS 2510 preto",
                      "results": 349
                  },
                  {
                      "id": "MLB14806572",
                      "name": "Digimec DPF-1",
                      "results": 349
                  },
                  {
                      "id": "MLB14865031",
                      "name": "Qualitronix QR51",
                      "results": 349
                  },
                  {
                      "id": "MLB15345576",
                      "name": "Baseus Encok D02",
                      "results": 349
                  },
                  {
                      "id": "MLB15468441",
                      "name": "Lorben BM96-X",
                      "results": 349
                  },
                  {
                      "id": "MLB15468442",
                      "name": "Cofre Lorben BM96-X com abertura eletrônica cor preto",
                      "results": 349
                  },
                  {
                      "id": "MLB15834421",
                      "name": "Telefone sem fio Panasonic KX-TGC220LBB preto",
                      "results": 349
                  },
                  {
                      "id": "MLB16052887",
                      "name": "Britânia Inox Plus BCF36I",
                      "results": 349
                  },
                  {
                      "id": "MLB17449997",
                      "name": "Aquecedor elétrico KDT Aquecedor Central Digital branco 220V",
                      "results": 349
                  },
                  {
                      "id": "MLB18906216",
                      "name": "Cafeteira Britânia Inox Plus BCF36I semi automática preta de filtro 127V",
                      "results": 349
                  },
                  {
                      "id": "MLB18914706",
                      "name": "Memória RAM ValueRAM color verde  8GB 1 Kingston KVR16N11/8",
                      "results": 349
                  },
                  {
                      "id": "MLB19538629",
                      "name": "3 Repelentes Eletrônicos De Pernilongo, Ratos E Morcegos - Dni 6954 DNI Eletrônico",
                      "results": 349
                  },
                  {
                      "id": "MLB19538631",
                      "name": "3 Repelentes Eletrônicos De Pernilongo, Ratos E Morcegos - Dni 6954",
                      "results": 349
                  },
                  {
                      "id": "MLB19691025",
                      "name": "Lego Marvel 10781",
                      "results": 349
                  },
                  {
                      "id": "MLB19691042",
                      "name": "Lego Miles Morales 10781 Triciclo Eletronico Do Homem Aranha Quantidade De Peças 59",
                      "results": 349
                  },
                  {
                      "id": "MLB19746991",
                      "name": "Polibrinq Robo Zig",
                      "results": 349
                  },
                  {
                      "id": "MLB19746995",
                      "name": "Robô Inteligente Educativo Zig Anda Ensina Inglês 25 Funções Cor Branco Personagem Robô",
                      "results": 349
                  },
                  {
                      "id": "MLB19760794",
                      "name": "Aparelho Espanta Rato E Morcego 1000m² Cabo 5m Original MEGT REM-3002",
                      "results": 349
                  },
                  {
                      "id": "MLB19760802",
                      "name": "Aparelho Espanta Rato E Morcego 1000m² Cabo 5m Original",
                      "results": 349
                  },
                  {
                      "id": "MLB19766716",
                      "name": "Cartão Micro Sd 64gb 32tbw Intelbras Alto Desempenho",
                      "results": 349
                  },
                  {
                      "id": "MLB19775532",
                      "name": "Aquário ca-42se 4G",
                      "results": 349
                  },
                  {
                      "id": "MLB19775534",
                      "name": "Celular Rural De Mesa Aquário 2 Chip Internet 2g 3g 4g Wifi",
                      "results": 349
                  },
                  {
                      "id": "MLB19888574",
                      "name": "Celular De Mesa Bedin Sat 5 Bandas 3g Wi-fi E Roteador Bdf12",
                      "results": 349
                  },
                  {
                      "id": "MLB20226759",
                      "name": "Pmcell P2 FO-13",
                      "results": 349
                  },
                  {
                      "id": "MLB20226786",
                      "name": "Fone De Ouvido Pmcell Fo-13",
                      "results": 349
                  },
                  {
                      "id": "MLB20233351",
                      "name": "Repelente Eletrônico Bivolt Ultrassônico Para Barata BARATA",
                      "results": 349
                  },
                  {
                      "id": "MLB20233389",
                      "name": "Repelente Eletrônico Bivolt Ultrassônico Para Barata",
                      "results": 349
                  },
                  {
                      "id": "MLB20681150",
                      "name": "JGL ELETRÔNICOS ModeloMG16/4, MG16/6, MG166cx USB, MG20/6 MIXERS, STEINBERG MR816X MIKE 3 VIAS",
                      "results": 349
                  },
                  {
                      "id": "MLB20681159",
                      "name": "Fonte Carregador Yamaha Pa 30",
                      "results": 349
                  },
                  {
                      "id": "MLB20692930",
                      "name": "Forkis FK-CF007",
                      "results": 349
                  },
                  {
                      "id": "MLB20692931",
                      "name": "Cofre Eletrônico Digital Em Aço Teclado Senha + 2 Chaves 23x17x17 Forkis Fk-cf007 ",
                      "results": 349
                  },
                  {
                      "id": "MLB20771602",
                      "name": "Repelente Eletrônico Bivolt Ultrassônico Para Mosca",
                      "results": 349
                  },
                  {
                      "id": "MLB20771605",
                      "name": "Repelente Eletrônico Bivolt Ultrassônico Para Mosca",
                      "results": 349
                  },
                  {
                      "id": "MLB21445912",
                      "name": "Balança de Precisão Digital - Balança Digital Cozinha - Balança Precisão Balança de Alimentos - 10kg - Nutrição - Dieta - Receita - Gourmet Alta Precisão - Eletrônica - Profissional - Inox - Cozinha -",
                      "results": 349
                  },
                  {
                      "id": "MLB21445924",
                      "name": "Balança De Cozinha Digital Alta Precisão Alimentos 10 Kg",
                      "results": 349
                  },
                  {
                      "id": "MLB21633608",
                      "name": "USIVALE CONECTORES 101",
                      "results": 349
                  },
                  {
                      "id": "MLB21744199",
                      "name": "Pró Euro Máscara de solda automática Águia, Eletrônica, Escurecimento, Visor fixo, Com tripla regulagem, DIN 4 ao 13, Para solda MMA (Eletrodo), MIG, TIG e Corte plasma, Esmerilhadeira, Soldador, Prof",
                      "results": 349
                  },
                  {
                      "id": "MLB21744219",
                      "name": "Máscara Solda Automática Eletrônica Regulagem Tripla Águia",
                      "results": 349
                  },
                  {
                      "id": "MLB21782008",
                      "name": "Nautika Saco estanque capa à prova d'água piscina praia",
                      "results": 349
                  }
              ]
          },
          {
              "id": "state",
              "name": "Localização",
              "type": "text",
              "values": [
                  {
                      "id": "TUxCUFNBT085N2E4",
                      "name": "São Paulo",
                      "results": 1834826
                  },
                  {
                      "id": "TUxCUFNBTkE5Nzc4",
                      "name": "Santa Catarina",
                      "results": 179467
                  },
                  {
                      "id": "TUxCUE1JTlMxNTAyZA",
                      "name": "Minas Gerais",
                      "results": 160263
                  },
                  {
                      "id": "TUxCUFBBUkExODBlZA",
                      "name": "Paraná",
                      "results": 143154
                  },
                  {
                      "id": "TUxCUFJJT08xODM5Zg",
                      "name": "Rio de Janeiro",
                      "results": 129537
                  },
                  {
                      "id": "TUxCUFJJT0xkYzM0",
                      "name": "Rio Grande do Sul",
                      "results": 67038
                  },
                  {
                      "id": "TUxCUEJBSEFlYmEx",
                      "name": "Bahia",
                      "results": 37010
                  },
                  {
                      "id": "TUxCUEVTUE8xN2Y3NA",
                      "name": "Espírito Santo",
                      "results": 28630
                  },
                  {
                      "id": "TUxCUEdPSVMxNzVmMw",
                      "name": "Goiás",
                      "results": 28281
                  },
                  {
                      "id": "TUxCUERJU0wxMWJhYg",
                      "name": "Distrito Federal",
                      "results": 7332
                  },
                  {
                      "id": "TUxCUE1BVEw4ZTc",
                      "name": "Mato Grosso do Sul",
                      "results": 5586
                  },
                  {
                      "id": "TUxCUE1BVE9jZDY0",
                      "name": "Mato Grosso",
                      "results": 1396
                  },
                  {
                      "id": "TUxCUEFMQVNmZjUw",
                      "name": "Alagoas",
                      "results": 1396
                  },
                  {
                      "id": "TUxCUFBFUk8xZmZj",
                      "name": "Pernambuco",
                      "results": 1396
                  }
              ]
          }
      ]
  });
});//app get


app.use(cors());

app.listen(port, () => {
  console.log(`Servidor Express rodando em http://localhost:${port}`);
});