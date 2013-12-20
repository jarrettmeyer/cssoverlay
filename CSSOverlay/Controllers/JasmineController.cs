using System;
using System.Web.Mvc;

namespace CSSOverlay.Controllers
{
    public class JasmineController : Controller
    {
        public ViewResult Run()
        {
            return View("SpecRunner");
        }
    }
}
