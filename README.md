# Next.js, Flask, Vercel Lab

I'm curious on capabilities of Next.js , Flask, and Vercel combination.

## Legends

- ✅ : Success
- 🔴 : Failed
- 🚀 : In Progress

## Lab Objective

### 1. ✅ Default template of Next.js, Flask, Vercel combination working properly

Commit: <https://github.com/ImBIOS/nextjs-flask-starter/commit/637ad0f816a7c7fe4fa93d216b6f2a0c6ae791ef>

Specifications (dir (url)):

- Python API directory: ./api (/api)
- Next.js API directory: -

Note: Of course, it's working. It's the default template.

✅ Python API URL: <https://nextjs-flask-starter-ndoij1cqy-imbios.vercel.app/api/python>

### 2. 🔴 Use Next.js API with Flask API in the same project

#### 2.1. 🔴 Use Next.js API (/api) with Flask API (/api-proxy) in the same project

Commit: <https://github.com/ImBIOS/nextjs-flask-starter/commit/c2b9d5b865a01cf5c9860ba14d76f64d33fac0ca>

Specifications (dir (url)):

- Python directory: ./api (/api-proxy)
- Next.js directory: ./ (/api)

Note: Test number 2 failed, means all test below will also failed. Vercel can only have single serverless function source in the same project. either Next.js API or Flask API.

✅ Next.js API URL: <https://nextjs-flask-starter-ghfbjy0uz-imbios.vercel.app/api/hello>
🔴Python API URL: <https://nextjs-flask-starter-ghfbjy0uz-imbios.vercel.app/api-proxy/hello>

#### 2.2. 🔴 Use Next.js API (/api) with Flask API (/api) in the same project

Not tested yet, but I think it will failed.

#### 2.3. 🔴 Use Next.js API (/api) with Flask API (/api-proxy) in the same project, but Flask directory changed from default (./api) to (./python)

Not tested yet, but I think it will failed.

#### 2.4. 🔴 Use Next.js API (/api) with Flask API (/api) in the same project, but Flask directory changed from default (./api) to (./python)

Not tested yet, but I think it will failed.

### 3. 🚀 Use Next.js as client side and Flask as server side

#### 3.1 🔴 Use Next.js as client side and Flask as server side, but Flask directory changed from default (./api) to (./python)

Not tested yet, but I think it will failed. It because I think Vercel recognize if there any serverless function in the project, is by detecting wether there is `api` directory or not. and if it has Next.js API, it will prefer to use Next.js API instead of Flask API.

#### 3.2 🚀 Use Next.js as client side and Flask as server side, but Flask API URL changed from default (./api) to (./python)
