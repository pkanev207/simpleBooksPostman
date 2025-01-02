# A tutorial by Codevolution on  YouTube

<https://www.youtube.com/watch?v=LAUi8pPlcUM&list=PLC3y8-rFHvwh8shCMHFA5kWxD9PaPwxaY&index=2>

```node --watch index.js```

```
Petar Kanev (A1 BG)
petar.kanev@a1.bg
// petar.kanev@zappware.com

Erds371415fvkr8

Kanev Petar-Kamenov
Group RemoteAccessA1BGSelcareOpen...
Worker: VMCTXAP1263
User: Q407591
Petar-Kamenov.Kanev@extern.A1.at
// Citrix:
Q-user: Q407591
Erds371415fvkr8_


// A1 login:
username : dualuser
pass: test1234

petarkamenovkanev@abv.bg
sometester
randomtester
Evr17krt18

adb shell setprop debug.firebase.analytics.app at.mobilkom.android.meina1


bitbucket / marketingpass:
_ATBBwzVTsrBkfK6XAuPmr8v3EEYyC79E570D
initial mocking
meetings:
https://meet.google.com/nhx-zrwe-fsd

curl -O https://aka.ms/wslubuntu2004
CanonicalGroupLimited.UbuntuonWindows_2004.2021.825.0.AppxBundle
tar -xvzf wslubuntu2004

ubuntu: petarkanev
password:

https://ubuntu.com/server/docs/upgrade-introduction

commands:

lsb_release -a

sudo whoami

sudo visudo

change settings:

1)
username  ALL=(ALL) NOPASSWD:ALL
2)
username ALL=(ALL) NOPASSWD:/bin/mkdir,/bin/rmdir

sudo groupadd docker

usermod -aG sudo petarkanev

sudo usermod -aG docker $USER

ls --lah

curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.6/install.sh | bash

export NVM_DIR="$([ -z "${XDG_CONFIG_HOME-}" ] && printf %s "${HOME}/.nvm" || printf %s "${XDG_CONFIG_HOME}/nvm")"

git clone https://Petar_Kanev@bitbucket.org/ZappwareTeam/marketingconsole.git

[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" # This loads nvm

nvm ls-remote
nvm install Hydrogen

code .

vscode
nvm use v18.19.0
nvm alias default node -> put default to latest node
nvm alias default v18.19

nvm install Hydrogen

compass - mongodb:
mongodb://mcadmin:mcadmin@localhost:27017/?authMechanism=DEFAULT

docker system prune -a
// should delete containers to delete volumes 
docker system prune --volumes
docker volume prune -a

cd marketingconsole/docker/dev
 ./buildcontainers.sh
 ./startcontainers.sh
http://localhost:4000/graphql/dev

docker-compose-dev.yml
101 
      MC_CONNECTOR: "DEMO"
105
      MC_CONNECTOR: "SDSEVO"
      MC_SDSEVO_HOST: "http://10.11.1.250"
      MC_SDSEVO_PORT: 8889
      MC_SDSEVO_LOGIN: "marketingconsole"
      MC_SDSEVO_PWD: "mc_a12017"
      MC_NCANTO_HOST: "http://staging-zappware.xroadmedia.com"
      MC_NCANTO_PORT: 80
      MC_NCANTO_DEFAULT_SUBSCRIBER: "schenk"
      MC_SDSMW_HOST: "http://10.11.1.250"
      MC_SDSMW_PORT: 8080


settings.json
19   "editor.wordWrap": "on",


user/.wslconfig: `
# Settings apply across all Linux distros running on WSL 2
[wsl2]
 
memory=8GB 
processors=8
swap=4GB
#localhostforwarding=true
`

Hi Petar,

You should have received invites to get access to our systems now with your "petar.kanev@a1.bg" e-mail address.
- Confluence: https://zappware.atlassian.net/wiki/spaces/MC/overview
- Jira: https://zappware.atlassian.net/jira/software/c/projects/MC/issues/
- Bitbucket: https://bitbucket.org/ZappwareTeam/marketingconsole/src/develop/

These are your credentials for VPN access:
u: petar.kanev
p: >wX2Mz}jd^1u
See attachments for more information.
Note: you will not be able to connect to jenkins as described in the document, 
but you should be able to connect to:

ZAPPWARE REFERENCE Marketing Console 
http://10.11.1.252:4000/


Install the dedicated Watchguard software (WG-MVPN-SSL.exe) that you can download here:
https://vpn.zappware.com/sslvpn_download.shtml
Log in with your VPN credentials
Server address: vpn.zappware.com

Server address: vpn.zappware.com

sudo apt update
sudo apt install -f
sudo RELEASE_UPGRADER_ALLOW_THIRD_PARTY=1 do-release-upgrade



Check which version of WSL you are running
You can list your installed Linux distributions and check the version of WSL each is set to by entering the command:
wsl -l -v in PowerShell or Windows Command Prompt.

To set the default version to WSL 1 or WSL 2 when a new Linux distribution is installed, use the command:
 wsl --set-default-version <Version#>, replacing <Version#> with either 1 or 2.

To set the default Linux distribution used with the wsl command, enter:
 wsl -s <DistributionName> or wsl --set-default <DistributionName>, 
replacing <DistributionName> with the name of the Linux distribution you would like to use. 
For example, from PowerShell/CMD, enter: wsl -s Debian to set the default distribution to Debian. 
Now running wsl npm init from Powershell will run the npm init command in Debian.

To run a specific wsl distribution from within PowerShell or Windows Command Prompt
without changing your default distribution, use the command: 
wsl -d <DistributionName>, replacing <DistributionName> with the name of the distribution you want to use.


Fix EOL issues
There can be issues with GIT automatically adjusting (silently in the background) line endings (CRLF vs LF) for developers using Windows.
This behaviour should be disabled for the repository.

Make sure you do not have anything that is not committed because it will get lost.
Run the next command:

./scripts/fix_end_lines.sh

git pull

git pull origin develop

git push -u -f origin master

git checkout -b test-branch master

git checkout -b feature/MC-5261

git branch

git branch -vv

git checkout develop

git fetch --all --prune

// skip the pre-commit checks
git commit -m "" --no-verify


// We need to check the response, content type as trying to log a stream response
// cause a circular dependency error as streams can't be stringified and is anti pattern even to try it.


// Replica Set
docker - mongo

apt-get install mongodb

mongod --replSet movieSet --dbpath=/home/store/data/replica1 --port 27017 --smallfiles --oplogSize 200
mongod --replSet movieSet --dbpath=/home/store/data/replica2 --port 27018 --smallfiles --oplogSize 200

// connect to main replica - we can write only here
mongo --port 27017
// create config
config = { _id : "movieSet", members : [ { _id : 0, host : "loacalhost:27017" }, { _id : 1, host : "loacalhost:27018" }, { _id : 2, host : "loacalhost:27019" } ] }
rs.initiate()
rs.status
db.isMaster()
// hello - command returns an object with msg
// performing replica set maintenance
rs.reconfig()
rs.stepDown()
// insert empty document - should be replicated across other replicas
db.test.insertOne({})
// log out
exit
// log to another
mongo --port=27018
show dbs
// we should be NOT able to write here

// we can connect like this
mongodb://loacalhost:27017, loacalhost:27018,loacalhost:27019/?replicaSet=movieSet


The docker-compose.yml file will change from:

version: "2"
 
services:
  mongo:
    build:
      context: ../../
      dockerfile: docker/dev/mongo/Dockerfile
    image: mongo
    container_name: mongo
    ports:
      - "27017:27017"
    networks:
      - backend
    volumes:
      - mongo-data-volume:/data/db
      - mongo-data-config-volume:/data/configdb
    restart: always
 
networks:
  backend:
    driver: bridge
 
volumes:
  mongo-data-volume:
    driver: local
  mongo-data-config-volume:
    driver: local

to this replica-set verion:

version: "3.6"
 
services:
  mongo1:
    build:
      context: ../../
      dockerfile: docker/dev/mongo/Dockerfile
    image: mongo
    container_name: mongo1
    ports:
      - "7011:7011"
    secrets:
      - source: MONGO_DB_KEYFILE
    networks:
      - backend
      - mongo
    volumes:
      - mongo-data-volume:/data/db
      - mongo-data-config-volume:/data/configdb
    restart: always
 
  mongo2:
    build:
      context: ../../
      dockerfile: docker/dev/mongo/Dockerfile
    image: mongo
    container_name: mongo2
    ports:
      - "7012:7012"
    secrets:
      - source: MONGO_DB_KEYFILE
    networks:
      - backend
      - mongo
    volumes:
      - mongo-data-volume:/data/db
      - mongo-data-config-volume:/data/configdb
    restart: always
 
  mongo3:
    build:
      context: ../../
      dockerfile: docker/dev/mongo/Dockerfile
    image: mongo
    container_name: mongo3
    ports:
      - "7013:7013"
    secrets:
      - source: MONGO_DB_KEYFILE
    networks:
      - backend
      - mongo
    volumes:
      - mongo-data-volume:/data/db
      - mongo-data-config-volume:/data/configdb
    restart: always
 
  mongo4:
    build:
      context: ../../
      dockerfile: docker/dev/mongo/Dockerfile
    image: mongo
    container_name: mongo3
    ports:
      - "7014:7014"
    secrets:
      - source: MONGO_DB_KEYFILE
    networks:
      - backend
      - mongo
    volumes:
      - mongo-data-volume:/data/db
      - mongo-data-config-volume:/data/configdb
    restart: always
 
networks:
  backend:
    driver: bridge
  mongo:
 
volumes:
  mongo-data-volume:
    driver: local
  mongo-data-config-volume:
    driver: local
secrets:
  MONGO_DB_KEYFILE:
    file: ../../docker/dev/mongo/keyfile

A KeyFile wil be used to serve as credential for each node so they can be authenticated to the ReplicaSet. Without this file, any other MongoDB serve could join the ReplicaSet. 



openssl rand -base64 756 > <path-to-keyfile>
chmod 400 <path-to-keyfile>

As last step we will also need a script to initialize our ReplicaSet:

//replicate.js
 
replicate="rs.initiate();
sleep(1000);
 
cfg = rs.conf();
cfg.members[0].host = "mongo1:7011";
rs.reconfig(cfg);
rs.add({ host: "mongo2:7012", priority: 0.5 });
rs.add({ host: "mongo3:7013", priority: 0.5 });
rs.add({ host: "mongo4:7014", priority: 0.5 });
rs.status();

We now need to connect to one of these containers (e.g. mongo1) and create the admin user like we did before. 


We have to change the dockerfile used to create the containers so that they include 

--replSet set to the replica set name.
--port set the port
--keyFile  set to the keyfile’s path
mongod --replSet replicaTest --port 7011 --keyFile /docker/dev/mongo/MONGO_DB_KEYFILE



"javascript.preferences.importModuleSpecifierEnding": "js",
"typescript.preferences.importModuleSpecifierEnding": "js",


Since PI24, you need to run the following command on your local machine in the "marketingconsole/marketingconsole/" folder (containing package.json):
npm i --legacy-peer-deps




// trainee-project-client

…or create a new repository on the command line
echo "# trainee-project-backend-" >> http://README.md
git init
git add http://README.md
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/pkanev207/trainee-project-backend-.git
git push -u origin main

// if something's wrong:
git pull --rebase origin master

// new branch
git checkout -b main-feature
git merge main

// push to a new branch
git push origin main:testing

git push origin feature

// 
git reset --hard HEAD

// IF you have NOT pushed your changes to remote
git reset HEAD~1
// Check if the working copy is clean by 
git status
// ELSE you have pushed your changes to remote
git revert HEAD

C:\Users\a1bg521154\Desktop\Trainee Project\Project Library\server>git commit -m "readme commit"
[main (root-commit) 76adb4e] readme commit
 Committer: Petar Kanev (A1 BG) <Petar.Kanev@a1.bg>
Your name and email address were configured automatically based
on your username and hostname. Please check that they are accurate.
You can suppress this message by setting them explicitly:

    git config --global user.name "Your Name"
    git config --global user.email you@example.com

After doing this, you may fix the identity used for this commit with:

    git commit --amend --reset-author



If you have your local project already tracked by git,
an empty remote repository existing, which you want to contain the project,
do the following steps:

cd existingLocalRepo
git remote set-url origin <remote_repo_URL>
git push -u origin --all
Explanation:

1. navigate to your local repo
2. tell git where the remote repo is located
3. upload/push your local branches to the remote repo


// failed push:
git reset --mixed origin/main
git add .

// to remove git add .
git reset
// or
git rm --cached



git stash
git stash -u // --include-untracked
git stash save "message"
git stash -a // stash --all
git stash list
git stash show -p // a detail summary - press Q to exit
git stash pop // by default will re-apply the most recently created stash to your working copy and removes it
git stash apply // reapply the changes to your working copy and keep them in your stash
git stash branch // to create a new branch to apply your stashed changes to
git stash drop stash@{1} // delete a particular stash

// workflow:
git status
git stash save "message"
git pull origin develop
// git pull origin branchname --allow-unrelated-histories
git stash drop stash@{1}
git stash pop
git add .
// git commit -m "MC-5224-cache-optimization"
git commit -a
ctrl + X
git push --set-upstream origin MC-5224-Caching-not-working-for-Channel-list  
// MC-5196-Loading-too-slow-in-Channels // MC-5165-Create-Unit-Tests-For-SDSEVO-Connector // MC-5165-Create-Unit-Tests-For-SDSEVO-Connector
git push -u origin MC-5224-Caching-not-working-for-Channel-list
// check if there is a new branch
git push origin



git log --oneline
git diff HEAD 
git show HEAD  
// press q


The git reset --hard HEAD command would discard all uncommitted changes even if you've added them to the staging area

To reset the codebase to that commit, I would run git reset --hard HEAD:
git reset --hard <commit-hash>
// For instance, HEAD{0} means the HEAD itself, HEAD{1} means the commit before the HEAD, 
// HEAD{2} means two commits before the HEAD, and so on.


git rebase -i <branch_name>
// i - interactively - discard current branch changes and take the changes fromn <branch_name>
// Careful! This is rewriting the commit history!!
git reflog - undo git rebase

// RTK Query
import { MetadataObj } from '../../../types/globalTypes';
import { apiSlice } from '../../app/api/apiSlice';
import { logOut } from './authSlice';

export const authApiSlice = apiSlice.injectEndpoints({
  endpoints: builder => ({
    login: builder.mutation({
      query: (credentials: MetadataObj) => ({
        url: "/signin",
        method: "POST",
        body: { ...credentials },
      }),
    }),
    sendLogout: builder.mutation({
      query: () => ({
        url: "/logout",
        method: "POST",
      }),
      async onQueryStarted(arg, { dispatch, queryFulfilled }) {
        try {
          await queryFulfilled;
          dispatch(logOut(null));
          dispatch(apiSlice.util.resetApiState());
        } catch (err) {
          console.log(err);
        }
      },
    }),
  }),
});

export const { useLoginMutation, useSendLogoutMutation } = authApiSlice;



// apiSlice.js
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://my-api.herokuapp.com/',
    prepareHeaders: (headers, { getState }) => {
      const token = getState().authApi.data.token;
      // If we have a token in localStorage, lets use it:
      if (token) {
        headers.set('Authorization', `Bearer ${token}`);
      }

      return headers;
    },
  }),
  endpoints: builder => ({
    fetchUser: builder.query({
      query: () => `/users/current`,
    }),
    createUser: builder.mutation({
      query: ({ name, email, password }) => ({
        url: '/users/signup',
        method: 'POST',
        body: {
          name,
          email,
          password,
        },
      }),
    }),
    loginUser: builder.mutation({
      query: ({ email, password }) => ({
        url: '/users/login',
        method: 'POST',
        body: {
          email,
          password,
        },
      }),
    }),
    logoutUser: builder.mutation({
      query: () => ({
        url: '/users/logout',
        method: 'POST',
      }),
    }),
  }),
});

export const {
  useFetchUserQuery,
  useCreateUserMutation,
  useLoginUserMutation,
  useLogoutUserMutation,
} = authApi;



// LoginComponent.js
async function handleSubmit(e) {
    const email = e.currentTarget.email.value;
    const password = e.currentTarget.password.value;

    e.preventDefault();

    const loginData = {
      email,
      password,
    };

    if (email && password) {
        loginUser(loginData);
        // looks like here I need to unwrap().then(credentials)
      
        toast.success('You logged in! 🚀');
        history.push('/');
      } catch (err) {
        toast.error(err.message);
      }
    }


chrome://extensions/?id=hlepfoohegkhhmjieoechaddaejaokhf

Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git restore <file>..." to discard changes in working directory)
        modified:   docker/dev/docker-compose-dev.yml

no changes added to commit (use "git add" and/or "git commit -a")

Ethernet adapter Ethernet 4:

Connection-specific DNS Suffix  . : mobiltel.bg
Link-local IPv6 Address . . . . . : fe80::105a:a01a:c015:dcd5%16
IPv4 Address. . . . . . . . . . . : 10.194.11.179
Subnet Mask . . . . . . . . . . . : 255.255.255.0
Default Gateway . . . . . . . . . : 10.194.11.1


Windows PowerShell: ipconfig

msidn
static ip
horata na Asen msidn - da znam, prez offisa na A1



 async listUniversalChannels() {
  const cachedUniversalChannels = cacheProvider.get(ServerUtilities.CACHE_KEYS.ALL_UNIVERSAL_CHANNELS, config.MC_LONG_CACHE_OPTION, "all universal channels from EpgClient");
  if (cachedUniversalChannels) {
   return cachedUniversalChannels;
  }
  const options = {
   method: REQUEST_METHOD.GET,
   url: "/chnMgmt/ListUniversalChannels",
   params: { imgUrls: 2 }
  };
  const response = await this.makeRequest(options);
  cacheProvider.set(ServerUtilities.CACHE_KEYS.ALL_UNIVERSAL_CHANNELS, response.data.result, config.MC_LONG_CACHE_OPTION, "all universal channels from EpgClient");
  return response.data.result;
 }

 async listEpgChannels() {
  const cachedEpgChannels = cacheProvider.get(ServerUtilities.CACHE_KEYS.ALL_EPG_CHANNELS, config.MC_LONG_CACHE_OPTION, "all channels from EpgClient");
  if (cachedEpgChannels) {
   return cachedEpgChannels;
  }
  const options = {
   method: REQUEST_METHOD.GET,
   url: "/chnMgmt/ListChannels",
   params: {
    schAstRecs: 1, // only events in the future for which asset recordings are scheduled are returned
    imgUrls: 2
   }
  };
  const response = await this.makeRequest(options);
  cacheProvider.set(ServerUtilities.CACHE_KEYS.ALL_EPG_CHANNELS, response.data.result, config.MC_LONG_CACHE_OPTION, "all channels from EpgClient");
  return response.data.result;
 }





 ALL_UNIVERSAL_CHANNELS: "ALL_UNIVERSAL_CHANNELS",
 ALL_EPG_CHANNELS: "ALL_EPG_CHANNELS"


забелязах, че в ишу създадено от Yulia липсва описание на проблема и очакваните резултати и има само скрийншот, 
от което не става реално ясно къф точно е проблема и самия фикс. Yulia ако обичаш, моля следващите пъти слагай описания. 
Пиша го тук та и другите да си наблюдават това в бъдеще



Lutnik Marcus,
to prevent any mishaps, is there anything specific that needs to be tested here?

25 + x2 + 400 + x2 = c;
2x2 = c - 425


```
