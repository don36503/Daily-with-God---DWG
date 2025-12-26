(function () {
    function renderSidebar() {
      var sidebar = document.getElementById('sidebar');
      if (!sidebar) return;
  
    sidebar.innerHTML = `
        <div class="inner">
          <!-- Search -->
          <section id="search" class="alt">
            <form method="post" action="#">
              <input type="text" name="query" id="query" placeholder="Search" />
            </form>
          </section>
  
          <!-- Menu -->
          <nav id="menu">
            <header class="major">
              <h2>Menu</h2>
            </header>
            <ul>
              <li><a href="index.html">Homepage</a></li>
              <li><a href="blog.html">Blog</a></li>
              <li><a href="devotional.html">Devotionals</a></li>
              <li><a href="about.html">About</a></li>
              <li><a href="contact.html">Contact</a></li>
            </ul>
          </nav>
  
          <!-- Welcome / Community Section -->
          <section>
            <header class="major">
              <h2>Welcome To Our Community</h2>
            </header>
            <div class="mini-posts">
              <article>
                <iframe width="250" height="300" src="https://www.youtube.com/embed/kBRUpK9tTww" title="The Power Of Resilience - Emmanuel Emeh" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                <p><em>The Power Of Resilience - <strong>Emmanuel Emeh</strong></em></p>
              </article>
              <article>
                <a href="#" class="image"><img src="https://rivingtondemo.files.wordpress.com/2019/08/alberto-castillo-q-mx4mskk9zeo-unsplash-5.jpg" alt="" /></a>
                <p><strong>Build for the future.</strong>It Starts With You!</p>
              </article>
              <article>
                <a href="#" class="image"></a>
                <p>Build Year <br> <strong>2021</strong> <br> Faith Shared <br> <strong>500+</strong> <br> Followers <br> <strong>1000+</strong></p>
              </article>
            </div>
            <ul class="actions">
              <li><a href="#" class="button">More</a></li>
            </ul>
          </section>
  
          <!-- Get in touch -->
          <section>
            <header class="major">
              <h2>Get in touch</h2>
            </header>
            <p>We are available accross all the platforms on the internet including Twitter, Instagram, Facebook and many more... </p>
            <ul class="contact">
              <li class="icon solid fa-envelope"><a href="#">dailywithgod1@gmail.com</a></li>
              <li class="icon solid fa-phone">(+234) 814-7077-933</li>
              <li class="icon solid fa-home">1234 Bariga Road #8254<br />
                Lagos State, Nigeria.</li>
            </ul>
          </section>
  
          <!-- Footer -->
          <footer id="footer">
            <p class="copyright">&copy; Untitled. All rights reserved. Design: <a href="oyewoludavid@gmail.com">don</a>.</p>
          </footer>
        </div>
      `;
    }
  
    function renderHomePage() {
  
    }
  
    function renderBlogPage() {
      var container = document.getElementById('blog-root');
      if (!container) return;
  
      // Example data structure for backend to replace
      // Backend-friendly shape for blog posts
      // This can be returned directly as JSON from an API
      var posts = [
        {
          id: 1,
          slug: 'walking-daily-in-grace',
          title: 'Walking Daily in Grace',
          excerpt: 'A short reflection on how God walks with us in everyday life.',
          body: '', // backend can fill full HTML/Markdown later
          tag: 'Grace',
          coverImage: 'https://images.pexels.com/photos/208630/pexels-photo-208630.jpeg',
          publishedAt: '2025-01-01'
        },
        {
          id: 2,
          slug: 'hearing-god-in-the-quiet',
          title: 'Hearing God in the Quiet',
          excerpt: 'Learning to recognize God\'s voice in stillness and silence.',
          body: '',
          tag: 'Devotional',
          coverImage: 'https://images.pexels.com/photos/1029604/pexels-photo-1029604.jpeg',
          publishedAt: '2025-01-05'
        },
        {
          id: 3,
          slug: 'living-out-the-word',
          title: 'Living Out the Word',
          excerpt: 'Practical ways to apply Scripture to decisions, relationships, and daily habits.',
          body: '',
          tag: 'Christian Living',
          coverImage: 'https://images.pexels.com/photos/842567/pexels-photo-842567.jpeg',
          publishedAt: '2025-01-10'
        },
        {
          id: 4,
          slug: 'grace-in-difficult-seasons',
          title: 'Grace in Difficult Seasons',
          excerpt: 'Finding strength and comfort in God when life feels heavy and uncertain.',
          body: '',
          tag: 'Encouragement',
          coverImage: 'https://images.pexels.com/photos/2866258/pexels-photo-2866258.jpeg',
          publishedAt: '2025-01-15'
        }
      ];
  
      container.innerHTML = '';
  
      var section = document.createElement('section');
      var header = document.createElement('header');
      header.className = 'major';
      var h2 = document.createElement('h2');
      h2.textContent = 'Blog';
      header.appendChild(h2);
      section.appendChild(header);
  
      var postsWrapper = document.createElement('div');
      postsWrapper.className = 'posts';
  
      posts.forEach(function (post) {
        var article = document.createElement('article');
  
        if (post.coverImage) {
          var imageLink = document.createElement('a');
          imageLink.href = '/blog/' + (post.slug || '');
          imageLink.className = 'image';
          var img = document.createElement('img');
          img.src = post.coverImage;
          img.alt = post.title;
          imageLink.appendChild(img);
          article.appendChild(imageLink);
        }
  
        var h3 = document.createElement('h3');
        h3.textContent = post.title;
        article.appendChild(h3);
  
        var p = document.createElement('p');
        p.textContent = post.excerpt;
        article.appendChild(p);
  
        var meta = document.createElement('p');
        var dateText = post.publishedAt ? ' • ' + post.publishedAt : '';
        meta.innerHTML = '<strong>' + post.tag + '</strong>' + dateText;
        article.appendChild(meta);
  
        var actions = document.createElement('ul');
        actions.className = 'actions';
        var li = document.createElement('li');
        var btn = document.createElement('a');
        btn.href = '/blog/' + (post.slug || '');
        btn.className = 'button';
        btn.textContent = 'Read more';
        li.appendChild(btn);
        actions.appendChild(li);
        article.appendChild(actions);
  
        postsWrapper.appendChild(article);
      });
  
      section.appendChild(postsWrapper);
      container.appendChild(section);
    }
  
    function renderDevotionalsPage() {
      var container = document.getElementById('devotionals-root');
      if (!container) return;
      var devotionals = [
        {
          id: 1,
          slug: 'morning-with-god',
          title: 'Morning with God',
          passage: 'Psalm 23:1-3',
          summary: 'Starting the day resting in the Lord as our Shepherd.',
          body: '',
          coverImage: 'https://images.pexels.com/photos/1029604/pexels-photo-1029604.jpeg',
          publishedAt: '2025-01-02'
        },
        {
          id: 2,
          slug: 'strength-for-the-journey',
          title: 'Strength for the Journey',
          passage: 'Isaiah 40:31',
          summary: 'Waiting on God to renew our strength.',
          body: '',
          coverImage: 'https://images.pexels.com/photos/220201/pexels-photo-220201.jpeg',
          publishedAt: '2025-01-07'
        },
        {
          id: 3,
          slug: 'peace-in-the-storm',
          title: 'Peace in the Storm',
          passage: 'Mark 4:39',
          summary: 'Trusting Jesus to speak peace over every storm in our hearts.',
          body: '',
          coverImage: 'https://images.pexels.com/photos/347139/pexels-photo-347139.jpeg',
          publishedAt: '2025-01-12'
        },
        {
          id: 4,
          slug: 'walking-by-faith',
          title: 'Walking by Faith',
          passage: '2 Corinthians 5:7',
          summary: 'Choosing faith over fear in the small decisions of each day.',
          body: '',
          coverImage: 'https://images.pexels.com/photos/2531237/pexels-photo-2531237.jpeg',
          publishedAt: '2025-01-18'
        }
      ];
  
      container.innerHTML = '';
  
      var section = document.createElement('section');
      var header = document.createElement('header');
      header.className = 'major';
      var h2 = document.createElement('h2');
      h2.textContent = 'Devotionals';
      header.appendChild(h2);
      section.appendChild(header);
  
      var postsWrapper = document.createElement('div');
      postsWrapper.className = 'posts';
  
      devotionals.forEach(function (item) {
        var article = document.createElement('article');
  
        if (item.coverImage) {
          var imageLink = document.createElement('a');
          imageLink.href = '/devotionals/' + (item.slug || '');
          imageLink.className = 'image';
          var img = document.createElement('img');
          img.src = item.coverImage;
          img.alt = item.title;
          imageLink.appendChild(img);
          article.appendChild(imageLink);
        }
  
        var h3 = document.createElement('h3');
        h3.textContent = item.title;
        article.appendChild(h3);
  
        var pPassage = document.createElement('p');
        pPassage.innerHTML = '<strong>Scripture:</strong> ' + item.passage;
        article.appendChild(pPassage);
  
        var pSummary = document.createElement('p');
        pSummary.textContent = item.summary;
        article.appendChild(pSummary);
  
        var meta = document.createElement('p');
        var dateText = item.publishedAt ? ' • ' + item.publishedAt : '';
        meta.innerHTML = '<strong>Devotional</strong>' + dateText;
        article.appendChild(meta);
  
        var actions = document.createElement('ul');
        actions.className = 'actions';
        var li = document.createElement('li');
        var btn = document.createElement('a');
        btn.href = '/devotionals/' + (item.slug || '');
        btn.className = 'button';
        btn.textContent = 'Read devotional';
        li.appendChild(btn);
        actions.appendChild(li);
        article.appendChild(actions);
  
        postsWrapper.appendChild(article);
      });
  
      section.appendChild(postsWrapper);
      container.appendChild(section);
    }
  
    function renderContactPage() {
      var container = document.getElementById('contact-root');
      if (!container) return;
  
      container.innerHTML = '';
  
      var section = document.createElement('section');
      var header = document.createElement('header');
      header.className = 'major';
      var h2 = document.createElement('h2');
      h2.textContent = 'Contact Us';
      header.appendChild(h2);
      section.appendChild(header);
  
      var p = document.createElement('p');
      p.textContent = 'Have a question, testimony, or prayer request? Reach out and we will connect with you.';
      section.appendChild(p);
  
      var form = document.createElement('form');
      form.id = 'contact-form';
      form.setAttribute('method', 'post');
      form.setAttribute('action', '#'); // backend can change this
  
      var nameField = document.createElement('div');
      var nameLabel = document.createElement('label');
      nameLabel.setAttribute('for', 'name');
      nameLabel.textContent = 'Name';
      var nameInput = document.createElement('input');
      nameInput.type = 'text';
      nameInput.id = 'name';
      nameInput.name = 'name';
      nameField.appendChild(nameLabel);
      nameField.appendChild(nameInput);
  
      var emailField = document.createElement('div');
      var emailLabel = document.createElement('label');
      emailLabel.setAttribute('for', 'email');
      emailLabel.textContent = 'Email';
      var emailInput = document.createElement('input');
      emailInput.type = 'email';
      emailInput.id = 'email';
      emailInput.name = 'email';
      emailField.appendChild(emailLabel);
      emailField.appendChild(emailInput);
  
      var subjectField = document.createElement('div');
      var subjectLabel = document.createElement('label');
      subjectLabel.setAttribute('for', 'subject');
      subjectLabel.textContent = 'Subject';
      var subjectInput = document.createElement('input');
      subjectInput.type = 'text';
      subjectInput.id = 'subject';
      subjectInput.name = 'subject';
      subjectField.appendChild(subjectLabel);
      subjectField.appendChild(subjectInput);
  
      var messageField = document.createElement('div');
      var messageLabel = document.createElement('label');
      messageLabel.setAttribute('for', 'message');
      messageLabel.textContent = 'Message';
      var messageTextarea = document.createElement('textarea');
      messageTextarea.id = 'message';
      messageTextarea.name = 'message';
      messageTextarea.rows = 6;
      messageField.appendChild(messageLabel);
      messageField.appendChild(messageTextarea);
  
      var actions = document.createElement('ul');
      actions.className = 'actions';
  
      var liSubmit = document.createElement('li');
      var submitBtn = document.createElement('button');
      submitBtn.type = 'submit';
      submitBtn.className = 'button primary';
      submitBtn.textContent = 'Send Message';
      liSubmit.appendChild(submitBtn);
  
      actions.appendChild(liSubmit);
  
      form.appendChild(nameField);
      form.appendChild(emailField);
      form.appendChild(subjectField);
      form.appendChild(messageField);
      form.appendChild(actions);
  
      section.appendChild(form);
      container.appendChild(section);
    }
  
    document.addEventListener('DOMContentLoaded', function () {
      renderSidebar();
  
      var page = document.body.getAttribute('data-page');
      switch (page) {
        case 'home':
          // Home content is fully static in index.html
          break;
        case 'blog':
          // Blog content is defined statically in blog.html
          break;
        case 'devotionals':
          // Devotionals content is defined statically in devotional.html
          break;
        case 'contact':
          // Contact content is defined statically in contact.html
          break;
        case 'about':
          // About content is defined statically in about.html
          break;
        default:
          break;
      }
    });
  })();
  