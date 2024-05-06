using System.Xml;
using Microsoft.AspNetCore.Mvc;
using SeedCollection.Models;

namespace MyApp.Namespace
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProductApiController : ControllerBase
    {
        public ProductApiController()
        {

        }

        private readonly List<Product> _products = new List<Product>
        {
            new Product { UniqueId = new Guid("7203b321-b874-423a-a018-7ef493830575"), Name = "Product 1", Price = 10.99m },
            new Product { UniqueId = new Guid("b530400d-3fde-4b20-be53-09e01bc82358"), Name = "Product 2", Price = 20.49m },
            new Product { UniqueId = new Guid("1f18bf14-debc-4477-a8bc-490e87764705"), Name = "Product 3", Price = 15.99m }
        };

        [HttpGet("products")]
        public IActionResult GetProducts()
        {
            return Ok(_products);
        }

        [HttpGet("products/{uniqueId}")]
        public IActionResult GetProducts(Guid uniqueId)
        {
            var product = _products.FirstOrDefault(p => p.UniqueId == uniqueId);

            if (product == null)
            {
                return BadRequest();
            }
            return Ok(product);
        }
    }
}
