using API.Entities;
using Microsoft.AspNetCore.Identity;
using System.Collections;
using System.Collections.Generic;

namespace API.DTOs
{
    public class AppRole : IdentityRole<int>
    {
        public ICollection<AppUserRole> UserRoles { get; set; }
    }
}
