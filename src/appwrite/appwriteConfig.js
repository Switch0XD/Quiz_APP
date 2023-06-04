import {Client, Account, Databases} from 'appwrite'

const client = new Client(); // set your end-pionts 

client.setEndpoint("https://cloud.appwrite.io/v1").setProject("647332cb9306f58de4a4")

export const account = new Account(client) // this Account is responsible for creating  the account

//Databases

export const databases = new Databases(client, "647333601791c143edc3")
