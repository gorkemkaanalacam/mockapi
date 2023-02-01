const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router('db.json')
const middlewares = jsonServer.defaults()

server.use(middlewares)

server.use(jsonServer.bodyParser)
server.post('/communityforum/community_forums/:id/block_account', (req, res, next) => {
        res.jsonp(
            {
                message:"Account Blocked"
            }
        )   
  })

server.get('/communityforum/community_forums/:id/accounts', (req, res, next) => {
    if(req.query.blocked === "true"){
        res.jsonp(
            {
                data: [
                  {
                    id: "3",
                    type: "account",
                    attributes: {
                      id: 1,
                      first_name: "test",
                      last_name: "test",
                      email: "tester@me.com",
                      created_at: "2022-05-20T13:34:37.710Z",
                      updated_at: "2022-05-20113:38:43.798Z",
                      role_id: 1,
                      user_name: null
                    }
                  }
                ]
              }
        )
    }
    else{
        next()
    }       
  })

server.post('/request_management/requests', (req, res) => {
    res.jsonp({
        data: {
          accounts: [
            {
              id: 1,
              first_name: "test",
              last_name: "test",
              email: "tester@me.com",
              created_at: "2022-05-20T13:34:37.710Z",
              updated_at: "2022-05-20T13:38:43.798Z",
              role_id: 1,
              user_name: null
            }
          ]
        }
      }
      )
  })

  server.put('/request_management/requests/:id/review', (req, res) => {
    if(req.body.is_accepted){
        res.jsonp(
            {
                data: {
                  id: "3",
                  type: "request",
                  attributes: {
                    sender_id: 2,
                    status: "accepted",
                    rejection_reason: null,
                    request_text: "I want to join your forum",
                    created_at: "2022-11-22T15:59:40.941Z",
                    updated_at: "2022-11-22T16:10:05.8382",
                    reviewer_group_id: 2,
                    sender_full_name: "test test"
                  }
                }
              }
        )
    }
    else {
        res.jsonp(
            {
                data: {
                  id: "3",
                  type: "request",
                  attributes: {
                    sender_id: 2,
                    status: "rejected",
                    rejection_reason: req.body.rejection_reason,
                    request_text: "I want to join your forum",
                    created_at: "2022-11-22T15:59:40.941Z",
                    updated_at: "2022-11-22T16:10:05.8382",
                    reviewer_group_id: 2,
                    sender_full_name: "test test"
                  }
                }
              }
        )
    }
  })

server.use(jsonServer.rewriter({
    '/*': '/$1',
    "/communityforum/community_forums": "/community_forums",
    "/communityforum/community_forums/:id/accounts": "/communityforum/:id",
    "/communityforum/community_forums/:id/accounts?blocked=:blocked": "/communityforum/:id",
    "/request_management/requests": "/request_management"
  }))
server.use(router)
server.listen(process.env.PORT || 3004, () => {
  console.log('JSON Server is running')
})