namespace API.Entities
{
    public class AppUser
    {
        public int id { get; set; }
        public string UserName { get; set; }
        public byte[] PasswordHash { get; set; }

        public byte[] Passwordsalt { get; set; }
    }
}
