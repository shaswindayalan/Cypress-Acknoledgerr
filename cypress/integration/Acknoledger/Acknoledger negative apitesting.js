/// <referance types="cypress" />

describe('Acknoledger negative testing',function(){


    it('Login with valid email and invalid password',function(){

       cy.request({
       method : 'POST',
       url : 'https://app.acknoledger.com/oauth-server/login',
       failOnStatusCode: false,
       headers : {
        'api-key': 'uqwyehdbstygwqevdystfrwebnasdfjhre'
       },
       body: {
        "userId": "sunil_khawas@yahoo.com",
        "password": "1234567",
        "role": "Client"
        }
     }).then((res)=>{
        expect(res.status).to.equal(400)
       

    });
});

    it('Login with invalid email and valid password',function(){

        cy.request({
        method : 'POST',
        url : 'https://app.acknoledger.com/oauth-server/login',
        failOnStatusCode: false,
        headers : {
        'api-key': 'uqwyehdbstygwqevdystfrwebnasdfjhre'
        },
        body: {
        "userId": "sunill_khawas@yahoo.com",
        "password": "123456",
        "role": "Client"
        }
     }).then((res)=>{
           expect(res.status).to.equal(400)
     });
    });

     it('Login with empty email and password',function(){

        cy.request({
        method : 'POST',
        url : 'https://app.acknoledger.com/oauth-server/login',
        failOnStatusCode: false,
        headers : {
        'api-key': 'uqwyehdbstygwqevdystfrwebnasdfjhre'
        },
        body: {
        "userId": "",
        "password": "",
        "role": "Client"
        }
     }).then((res)=>{
           expect(res.status).to.equal(400)
     });

    });
});

     it('Record create without Creator',function(){

       cy.request({
       method : 'POST',
       url : 'https://app.acknoledger.com/api/record',
       failOnStatusCode: false,
       headers : {
       'api-key': 'uqwyehdbstygwqevdystfrwebnasdfjhre'
       
    
      },
      body:{
            "token_id" : "Hello",
            "tokenURI" : "https://images.pexels.com",
            "token_name" : "sunny",
            "imageURL" : "https://images.pexels.com/photos/10571831/pexels-photo-10571831.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
            "description" : "Dummy Description",
            "properties" : "Dummy Properties",
            "creator" : "",
            "owner" : "Sunny",
            "location" : "Dummy",
            "priceURI" : "https://images.pexels.com",
            "transactionURI" : "Dummy",
            "metadata" : "Dummy",
            "record_id" : "sunil_b_khawas10",
            "client_id" : "sunil_b_khawas",
            "contract_address" : "Test 27-12"
        }
     }).then((res)=>{
       expect(res.status).to.equal(400)
     

    });
});
     it('Record create without tokenid',function(){

     cy.request({
     method : 'POST',
     url : 'https://app.acknoledger.com/api/record',
     failOnStatusCode: false,
     headers : {
     'api-key': 'uqwyehdbstygwqevdystfrwebnasdfjhre'
    
 
    },
     body:{
         "token_id" : "Hello",
         "tokenURI" : "https://images.pexels.com",
         "token_name" : "sunny",
         "imageURL" : "https://images.pexels.com/photos/10571831/pexels-photo-10571831.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
         "description" : "Dummy Description",
         "properties" : "Dummy Properties",
         "creator" : "Sunny",
         "owner" : "Sunny",
         "location" : "Dummy",
         "priceURI" : "https://images.pexels.com",
         "transactionURI" : "Dummy",
         "metadata" : "Dummy",
         "record_id" : "sunil_b_khawas10",
         "client_id" : "sunil_b_khawas",
         "contract_address" : "Test 27-12"
     }
  }).then((res)=>{
    expect(res.status).to.equal(400)
  });
});

it('Record create without owner',function(){

    cy.request({
    method : 'POST',
    url : 'https://app.acknoledger.com/api/record',
    failOnStatusCode: false,
    headers : {
    'api-key': 'uqwyehdbstygwqevdystfrwebnasdfjhre'
    
 
   },
   body:{
         "token_id" : "Hello",
         "tokenURI" : "https://images.pexels.com",
         "token_name" : "sunny",
         "imageURL" : "https://images.pexels.com/photos/10571831/pexels-photo-10571831.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
         "description" : "Dummy Description",
         "properties" : "Dummy Properties",
         "creator" : "Sunny",
         "owner" : "",
         "location" : "Dummy",
         "priceURI" : "https://images.pexels.com",
         "transactionURI" : "Dummy",
         "metadata" : "Dummy",
         "record_id" : "sunil_b_khawas10",
         "client_id" : "sunil_b_khawas",
         "contract_address" : "Test 27-12"
     }
  }).then((res)=>{
    expect(res.status).to.equal(400)

  });
});

it('Record create without location',function(){

    cy.request({
    method : 'POST',
    url : 'https://app.acknoledger.com/api/record',
    failOnStatusCode: false,
    headers : {
    'api-key': 'uqwyehdbstygwqevdystfrwebnasdfjhre'
    
 
   },
   body:{
         "token_id" : "Hello",
         "tokenURI" : "https://images.pexels.com",
         "token_name" : "sunny",
         "imageURL" : "https://images.pexels.com/photos/10571831/pexels-photo-10571831.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
         "description" : "Dummy Description",
         "properties" : "Dummy Properties",
         "creator" : "Sunny",
         "owner" : "Sunny",
         "location" : "",
         "priceURI" : "https://images.pexels.com",
         "transactionURI" : "Dummy",
         "metadata" : "Dummy",
         "record_id" : "sunil_b_khawas10",
         "client_id" : "sunil_b_khawas",
         "contract_address" : "Test 27-12"
     }
  }).then((res)=>{
    expect(res.status).to.equal(400)
  });
});

it('Record create without imageurl',function(){

    cy.request({
    method : 'POST',
    url : 'https://app.acknoledger.com/api/record',
    failOnStatusCode: false,
    headers : {
    'api-key': 'uqwyehdbstygwqevdystfrwebnasdfjhre'
    
 
   },
   body:{
         "token_id" : "Hello",
         "tokenURI" : "https://images.pexels.com",
         "token_name" : "sunny",
         "imageURL" : "",
         "description" : "Dummy Description",
         "properties" : "Dummy Properties",
         "creator" : "Sunny",
         "owner" : "Sunny",
         "location" : "Dummy",
         "priceURI" : "https://images.pexels.com",
         "transactionURI" : "Dummy",
         "metadata" : "Dummy",
         "record_id" : "sunil_b_khawas10",
         "client_id" : "sunil_b_khawas",
         "contract_address" : "Test 27-12"
     }
  }).then((res)=>{
    expect(res.status).to.equal(400)
  });
});

it('Record create without description',function(){

    cy.request({
    method : 'POST',
    url : 'https://app.acknoledger.com/api/record',
    failOnStatusCode: false,
    headers : {
    'api-key': 'uqwyehdbstygwqevdystfrwebnasdfjhre'
    
 
   },
   body:{
         "token_id" : "Hello",
         "tokenURI" : "https://images.pexels.com",
         "token_name" : "sunny",
         "imageURL" : "https://images.pexels.com/photos/10571831/pexels-photo-10571831.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
         "description" : "",
         "properties" : "Dummy Properties",
         "creator" : "Sunny",
         "owner" : "Sunny",
         "location" : "Dummy",
         "priceURI" : "https://images.pexels.com",
         "transactionURI" : "Dummy",
         "metadata" : "Dummy",
         "record_id" : "sunil_b_khawas10",
         "client_id" : "sunil_b_khawas",
         "contract_address" : "Test 27-12"
     }
  }).then((res)=>{
    expect(res.status).to.equal(400)
  });
});
  
it('Record create without properties',function(){

    cy.request({
    method : 'POST',
    url : 'https://app.acknoledger.com/api/record',
    failOnStatusCode: false,
    headers : {
    'api-key': 'uqwyehdbstygwqevdystfrwebnasdfjhre'
    
 
   },
   body:{
         "token_id" : "Hello",
         "tokenURI" : "https://images.pexels.com",
         "token_name" : "sunny",
         "imageURL" : "https://images.pexels.com/photos/10571831/pexels-photo-10571831.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
         "description" : "Dummy Description",
         "properties" : "",
         "creator" : "Sunny",
         "owner" : "Sunny",
         "location" : "Dummy",
         "priceURI" : "https://images.pexels.com",
         "transactionURI" : "Dummy",
         "metadata" : "Dummy",
         "record_id" : "sunil_b_khawas10",
         "client_id" : "sunil_b_khawas",
         "contract_address" : "Test 27-12"
     }
  }).then((res)=>{
    expect(res.status).to.equal(400)
  });
});

it('Record create without priceurl',function(){

    cy.request({
    method : 'POST',
    url : 'https://app.acknoledger.com/api/record',
    failOnStatusCode: false,
    headers : {
    'api-key': 'uqwyehdbstygwqevdystfrwebnasdfjhre'
    
 
   },
   body:{
         "token_id" : "Hello",
         "tokenURI" : "https://images.pexels.com",
         "token_name" : "sunny",
         "imageURL" : "https://images.pexels.com/photos/10571831/pexels-photo-10571831.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
         "description" : "Dummy Description",
         "properties" : "Dummy Properties",
         "creator" : "Sunny",
         "owner" : "Sunny",
         "location" : "Dummy",
         "priceURI" : "",
         "transactionURI" : "Dummy",
         "metadata" : "Dummy",
         "record_id" : "sunil_b_khawas10",
         "client_id" : "sunil_b_khawas",
         "contract_address" : "Test 27-12"
     }
  }).then((res)=>{
    expect(res.status).to.equal(400)
  
  });
});

it('Record create without transaction url',function(){

    cy.request({
    method : 'POST',
    url : 'https://app.acknoledger.com/api/record',
    failOnStatusCode: false,
    headers : {
    'api-key': 'uqwyehdbstygwqevdystfrwebnasdfjhre'
    
 
   },
   body:{
         "token_id" : "Hello",
         "tokenURI" : "https://images.pexels.com",
         "token_name" : "sunny",
         "imageURL" : "https://images.pexels.com/photos/10571831/pexels-photo-10571831.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
         "description" : "Dummy Description",
         "properties" : "Dummy Properties",
         "creator" : "Sunny",
         "owner" : "Sunny",
         "location" : "Dummy",
         "priceURI" : "https://images.pexels.com",
         "transactionURI" : "",
         "metadata" : "Dummy",
         "record_id" : "sunil_b_khawas10",
         "client_id" : "sunil_b_khawas",
         "contract_address" : "Test 27-12"
     }
  }).then((res)=>{
    expect(res.status).to.equal(400)
  });
});


it('Record create without contract address',function(){

    cy.request({
    method : 'POST',
    url : 'https://app.acknoledger.com/api/record',
    failOnStatusCode: false,
    headers : {
    'api-key': 'uqwyehdbstygwqevdystfrwebnasdfjhre',
    'access_token':'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7ImNsaWVudF9pZCI6Imt5Mml1cXhhcmxxZnJsZ29wcSIsImNsaWVudF9zZWNyZXQiOiJUWmtPa25hazZ1ZkR0bTNKTVEya2xoSXByVGMybkUiLCJyb2xlIjoiQ2xpZW50In0sImlhdCI6MTY0NDkyMjI0MiwiZXhwIjoxNjQ0OTI1ODQyfQ.25cZQNAJdacVwdnxQxjIkA-QLDsBEClaXaX4AIk--bE'
    
 
   },
   body:{
         "token_id" : "Hello",
         "tokenURI" : "https://images.pexels.com",
         "token_name" : "sunny",
         "imageURL" : "https://images.pexels.com/photos/10571831/pexels-photo-10571831.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
         "description" : "Dummy Description",
         "properties" : "Dummy Properties",
         "creator" : "Sunny",
         "owner" : "Sunny",
         "location" : "Dummy",
         "priceURI" : "https://images.pexels.com",
         "transactionURI" : "Dummy",
         "metadata" : "Dummy",
         "record_id" : "sunil_b_khawas10",
         "client_id" : "sunil_b_khawas",
         "contract_address" : "ddaada"
     }
  }).then((res)=>{
    expect(res.status).to.equal(400)
  });
});

it('Record create without tokenid',function(){

    cy.request({
    method : 'POST',
    url : 'https://app.acknoledger.com/api/record',
    failOnStatusCode: false,
    headers : {
    'api-key': 'uqwyehdbstygwqevdystfrwebnasdfjhre',
    'access_token':'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7ImNsaWVudF9pZCI6Imt5Mml1cXhhcmxxZnJsZ29wcSIsImNsaWVudF9zZWNyZXQiOiJUWmtPa25hazZ1ZkR0bTNKTVEya2xoSXByVGMybkUiLCJyb2xlIjoiQ2xpZW50In0sImlhdCI6MTY0NDkyMjI0MiwiZXhwIjoxNjQ0OTI1ODQyfQ.25cZQNAJdacVwdnxQxjIkA-QLDsBEClaXaX4AIk--bE'
 
   },
   body:{
         "token_id" : "",
         "tokenURI" : "https://images.pexels.com",
         "token_name" : "sunny",
         "imageURL" : "https://images.pexels.com/photos/10571831/pexels-photo-10571831.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
         "description" : "Dummy Description",
         "properties" : "Dummy Properties",
         "creator" : "Sunny",
         "owner" : "Sunnyy",
         "location" : "Dummy",
         "priceURI" : "https://images.pexels.com",
         "transactionURI" : "Dummy",
         "metadata" : "Dummy",
         "record_id" : "sunil_b_khawas10",
         "client_id" : "sunil_b_khawas",
         "contract_address" : "Test 27-12"
     }
  }).then((res)=>{
    expect(res.status).to.equal(400)
  });
});
