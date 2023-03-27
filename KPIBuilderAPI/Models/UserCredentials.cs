﻿namespace KPIBuilderAPI.Models
{
    public class UserCredentials
    {
        public UserCredentials(string username, string password)
        {
            Username = username;
            Password = password;
        }
        public string Username;
        public string Password;
    }
}
