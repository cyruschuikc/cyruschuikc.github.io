const dropdownBtn = document.getElementById('dropdownBtn');
      const dropdownMenu = document.getElementById('dropdownMenu');

      // Toggle dropdown visibility
      dropdownBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        const isExpanded = dropdownMenu.classList.toggle('show');
        dropdownBtn.setAttribute('aria-expanded', isExpanded);
      });

      // Close dropdown when clicking outside
      window.addEventListener('click', () => {
        if (dropdownMenu.classList.contains('show')) {
          dropdownMenu.classList.remove('show');
          dropdownBtn.setAttribute('aria-expanded', 'false');
        }
      });

      // Close dropdown on Escape key press
      window.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && dropdownMenu.classList.contains('show')) {
          dropdownMenu.classList.remove('show');
          dropdownBtn.setAttribute('aria-expanded', 'false');
          dropdownBtn.focus();
        }
      });
