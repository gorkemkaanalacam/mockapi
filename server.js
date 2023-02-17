const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router('db.json')
const middlewares = jsonServer.defaults()

server.use(middlewares)

server.use(jsonServer.bodyParser)
server.post('/login/login', (req, res, next) => {
  res.jsonp(
    {
      meta: {
        token: "eyJhbGciOiJIUzUxMiJ9.eyJpZCI6MSwiZXhwIjoxNjY5ODIxMjkxLCJ0b2tlbl90eXBlIjoibG9naW4ifQ.eTyNv3hzvhh1KFy5yo2HTQRWOE7QFJwuF7kbstOvkD1bleY1RapbumF2DSvt4qs4PeRr6Zv-mARgRHeA8DGm4Q",
        refresh_token: "eyJhbGciOiJIUzUxMiJ9.eyJpZCI6MSwiZXhwIjoxNzAxMjcwODkxLCJ0b2tlbl90eXBlIjoicmVmcmVzaCJ9.01bxTaV3S85gNNr419NxxK2Y8IeKE9yIqhYSmSwn2FeIWxpbct9RE84a8f8tChIwE53raOn4JzfMUnHhL1z_kw",
        id: 1
      }
    }
  )   
})
server.post('/communityforum/community_forums/:id/block_account', (req, res, next) => {
        res.jsonp(
            {
                message:"Account Blocked"
            }
        )   
  })
  server.post('/communityforum/community_blocks', (req, res, next) => {
    res.jsonp(
        {
            message: req.body.account_id === 1 ? "Account Blocked" : "Account Unblocked"
        }
    )   
})
  server.post('/communityforum/community_forums', (req, res, next) => {
    res.jsonp(
      {
        id: "2",
        type1: "community_forum",
        attributes: {
          id: 2,
          name: "Community forum 1",
          description: "Description",
          topics: "topic1, topic2",
          created_at: "2021-10-06T14:46:51.329Z",
          updated_at: "2021-10-06T14:46:51.329Z",
          admin: true,
          join_request_sent: false,
          joined: true,
          followed: true,
          profile_pic: null,
          cover_pic: null,
          follower_count: 0
        }
      }
    )   
})
  server.delete('/communityforum/community_forums/:id', (req, res, next) => {
    res.jsonp(
        {
            message:"Community Removed"
        }
    )   
})
  server.put('/communityforum/community_forums/:id', (req, res, next) => {
          res.jsonp(
            {
              data: {
                id: "3",
                type: "community_forum",
                attributes: {
                  id: 3,
                  name: "Community forum 1",
                  description: "Description",
                  topics: "topic1, topic2",
                  created_at: "2021-10-07T15:31:46.573Z",
                  updated_at: "2021-10-07T15:31:46.625Z",
                  admin: true,
                  join_request_sent: false,
                  joined: true,
                  followed: true,
                  profile_pic: "/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBCZz09IiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--4daa0088c799c1fa7822d8722b78f91ece0a67c6/laptop.png",
                  cover_pic: "/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBCdz09IiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--8656e40da5eaa2b0b10f4e715fa0012ab8c057ab/laptop.png",
                  follower_count: 0
                }
              }
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
  })

  server.post('/account_groups/groups', (req, res) => {
    res.jsonp(
      {
        data: {
          id: "4",
          type: "group",
          attributes: {
            name: "test account group 1",
            settings: {
              object: {
                key: "value",
                array: [
                  1,
                  2
                ]
              },
              string: "stuff"
            },
            accounts: [
              {
                id: 1,
                first_name: "test",
                last_name: "test",
                full_phone_number: "",
                country_code: null,
                phone_number: null,
                email: "tester@me.com",
                activated: true,
                device_id: null,
                unique_auth_id: "0yrLbZGa9WLgjWbgqn6y2Att",
                password_digest: "$2a$12$y9re.MUgcRoOqUlC7ASTAOnSh1srCRVFUjjS9CZ5o5SVWAZucXhEq",
                created_at: "2022-05-20T13:34:37.710Z",
                updated_at: "2022-05-20T13:38:43.798Z",
                role_id: 1,
                user_name: null,
                platform: null,
                user_type: null,
                app_language_id: null,
                last_visit_at: null,
                is_blacklisted: false,
                suspend_until: null,
                status: "regular",
                stripe_id: null,
                stripe_subscription_id: null,
                stripe_subscription_date: null
              },
              {
                id: 2,
                first_name: "test",
                last_name: "test",
                full_phone_number: "",
                country_code: null,
                phone_number: null,
                email: "tester2@me.com",
                activated: true,
                device_id: null,
                unique_auth_id: "r9nTU1RZ0vml7kvlqb2r8gtt",
                password_digest: "$2a$12$U17CyTRnbBikRwKLoD1kHudelPYGGKVvIMK0pEDyCuvomJSOHptDq",
                created_at: "2022-05-20T13:34:37.984Z",
                updated_at: "2022-05-20T13:38:43.802Z",
                role_id: 2,
                user_name: null,
                platform: null,
                user_type: null,
                app_language_id: null,
                last_visit_at: null,
                is_blacklisted: false,
                suspend_until: null,
                status: "regular",
                stripe_id: null,
                stripe_subscription_id: null,
                stripe_subscription_date: null
              }
            ]
          }
        }
      }
    )
  })

  server.get('/request_management/requests/received', (req, res) => {
    res.jsonp(
      {
        data: [{
          id: "3",
          type: "request",
          attributes: {
            first_name: "test",
            last_name: "test",
            email: "tester@me.com",
            sender_id: 2,
            status: "pending",
            rejection_reason: null,
            request_text: "I want to join your forum",
            created_at: "2022-11-22T15:59:40.941Z",
            updated_at: "2022-11-22T16:10:05.8382",
            reviewer_group_id: 2,
            sender_full_name: "test test"
          }
        },
      
      ]
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