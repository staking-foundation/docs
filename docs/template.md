---
slug: /
sidebar_position: 1
title: Welcome
---

Tests
------------------------------------------------

```json
  {
  "id": "attest",
  "name": "Test Type"
  }
```

```go
package main

import "fmt"

func main() {
    fmt.Println("hello world")
}

```

$y = mx +b$

$$    
  \int_0^\infty \frac{x^3}{e^x-1}\,dx = \frac{\pi^4}{15}
  \tag{1}
$$

:::caution

In development, you can only use one locale at a same time.

:::

![sw1](img/divalabs.jpg)

<details>
  <summary>Toggle me!</summary>
  <div>
    <div>This is the detailed content</div>
    <br/>
    <details>
      <summary>
        Nested toggle! Some surprise inside...
      </summary>
      <div>
        😲😲😲😲😲
      </div>
    </details>
  </div>
</details>

You can execute (1) or $x=y+z$:

> https://test.com/

CRUD call:

`[POST] /api/v1/test`

Represents sending a `POST` request to the URL https://test/api/v1/test together with a correct JSON body. 




Running sample code
------------------------------------------------

>Usage of ./diva:
>
>  -at string
>
>    	Introduce a specific Test ID. (default "attest")
>
>  -ca string
>
>    	Introduce a specific Test ID. (default "catest")
>
>

Pre-generated example of API calls 
------------------------------------------------


Create a test and its associated object
------------------------------------------------

If you are not using the sample code, run the following command to generate a new ES512 private and public key pair before proceeding:

> ```bash
> openssl ecparam -genkey -name secp521r1 -noout -out ecdsa-p521-private.pem  
>
> openssl ec -in ecdsa-p521-private.pem -pubout -out ecdsa-p521-public.pem
> ```

All API calls must be authenticated. To perform authenticated API calls, the application must provide a `JWT` token in the header named `x-application` when calling to the API. This token must be generated using a previous `login`. For instance, login as:

> ```bash
> curl --request POST 'https://test/login' \
> --header 'Content-Type: application/json' \
> --data-raw '{
>    "org_id": "test",
>     "user_id": "username",
>    "password": "password"
> }'
> ```

_______________________________________________

1. Create the type of the test that you want to introduce in the platform. In the following example, we create a *`TestType`* with ID *`attest`*.

    *Send call to:*
    `[POST] /api/v1/test-types`

    *With request body:*

    ```json
        {
        "id": "attest",
        "name": "Test Type"
        }
    ```
    

_______________________________________________

2. Create the other test. 

    *Send call to:*
    `[POST] /api/v1/test`

    *With request body:*
    >```json
    >{
    >    "id": "test",
    >    "test_type_id": "test"
    >}
    >```
