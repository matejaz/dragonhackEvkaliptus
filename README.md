# dragonhackEvkaliptus

## Backend_app

**Available endpoints**

```
Url:
https://dhevkaliptus.herokuapp.com/api/

User api endpoint:
- users (GET) (get the list of all users)
- users (POST) (create a user: raw json body, parameter sex - not checked for format yet, zaenkrat male/female, sam je za spremenit)
- user/id (GET) (get user by id)
- user/id (PUT) (update user, you can update name, sex, score)

ActivityDetails api endpoint:
- actD (GET) (get the list of all activities)
- actD/id (GET) (get activities details by id)
- actDR (GET) (get a random ActivityDetails)

Activities api endpoint:
- activities (GET) (get the list of all activities)
- activities (POST) (create an activity, required data in body: users (int), start (Date), stop (Date), activityId (String), userId (String)
- activity/id (GET) (get an activity by id)

Achievements api endpoint:
- achievements (GET) (get the list of all achievements)
- achievement/id (GET) (get an achievement by id)
```
