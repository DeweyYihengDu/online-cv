jQuery(document).ready(function ($) {
  var $levelBars = $(".level-bar-inner");
  var $reveals = $(".reveal");
  var navLinks = document.querySelectorAll(".section-nav a");
  var observedSections = document.querySelectorAll("section[id]");

  $levelBars.css("width", "0");

  function animateSkillBars() {
    $levelBars.each(function () {
      var $bar = $(this);

      if ($bar.data("animated")) {
        return;
      }

      $bar.data("animated", true).animate(
        {
          width: $bar.data("level"),
        },
        900
      );
    });
  }

  if ("IntersectionObserver" in window) {
    var revealObserver = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting) {
            return;
          }

          entry.target.classList.add("is-visible");

          if ($(entry.target).find(".level-bar-inner").length) {
            animateSkillBars();
          }

          revealObserver.unobserve(entry.target);
        });
      },
      {
        threshold: 0.18,
        rootMargin: "0px 0px -8% 0px",
      }
    );

    $reveals.each(function () {
      revealObserver.observe(this);
    });

    var sectionObserver = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting) {
            return;
          }

          var currentId = entry.target.getAttribute("id");

          navLinks.forEach(function (link) {
            var isActive = link.getAttribute("href") === "#" + currentId;
            link.classList.toggle("active", isActive);
          });
        });
      },
      {
        threshold: 0.35,
        rootMargin: "-20% 0px -45% 0px",
      }
    );

    observedSections.forEach(function (section) {
      sectionObserver.observe(section);
    });
  } else {
    $reveals.addClass("is-visible");
    animateSkillBars();
  }
});
