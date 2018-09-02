using Microsoft.AspNetCore.Identity;
using Microsoft.Extensions.DependencyInjection;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace JwtAuthentication.Auth
{
    public class SeedDatabase
    {
        public static void Initialize(IServiceProvider serviceProvider)
        {
            var context = serviceProvider.GetRequiredService<ApplicationDBContext>();
            var userManager = serviceProvider.GetRequiredService<UserManager<ApplicationUser>>();
            context.Database.EnsureCreated();
            if (!context.Users.Any())
            {
                ApplicationUser appuser = new ApplicationUser()
                {
                    Email = "gihan@gmail.com",
                    SecurityStamp = Guid.NewGuid().ToString(),
                    UserName = "gihan"
                };
                userManager.CreateAsync(appuser, "Sandaru@1");
            }
        }
    }
}
