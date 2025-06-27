// Wait for the DOM to be fully loaded before running scripts
document.addEventListener('DOMContentLoaded', () => {
    // Get the 'Learn More' link and the second section element
    const learnMoreLink = document.querySelector('a[href="#2"]');
    const section2 = document.getElementById('2');

    // Smooth scroll to section 2 when 'Learn More' is clicked
    if (learnMoreLink && section2) {
        learnMoreLink.addEventListener('click', e => {
            e.preventDefault();
            section2.scrollIntoView({ behavior: 'smooth', block: 'start' });
        });
    }

    // Get carousel elements
    const carouselTrack = document.querySelector('.carousel-track');
    const btnLeft = document.querySelector('.carousel-btn.left');
    const btnRight = document.querySelector('.carousel-btn.right');

    // Set up carousel button functionality and fetch project data
    if (carouselTrack && btnLeft && btnRight) {
        // Scroll carousel left
        btnLeft.addEventListener('click', () => {
            carouselTrack.scrollBy({ left: -140, behavior: 'smooth' });
        });
        // Scroll carousel right
        btnRight.addEventListener('click', () => {
            carouselTrack.scrollBy({ left: 140, behavior: 'smooth' });
        });

        // Fetch project data from Modrinth API and populate carousel
        fetch('https://api.modrinth.com/v2/organization/lPP348Vz/projects')
            .then(response => response.json())
            .then(projects => {
                carouselTrack.innerHTML = '';
                projects.forEach(project => {
                    // Create carousel item for each project
                    const item = document.createElement('div');
                    item.className = 'carousel-item';
                    item.style.display = 'flex';
                    item.style.flexDirection = 'column';
                    item.style.justifyContent = 'space-between';
                    item.style.width = '350px';
                    item.style.height = '160px';
                    item.style.background = '#222';
                    item.style.borderRadius = '12px';
                    item.style.margin = '0 10px';
                    item.style.padding = '16px';
                    item.style.boxSizing = 'border-box';
                    item.style.boxShadow = '0 2px 8px rgba(0,0,0,0.15)';

                    // Top row: project icon and title
                    const topRow = document.createElement('div');
                    topRow.style.display = 'flex';
                    topRow.style.alignItems = 'center';

                    const icon = document.createElement('img');
                    icon.src = project.icon_url || 'resources/favicon.png';
                    icon.alt = `${project.title} icon`;
                    icon.style.width = '48px';
                    icon.style.height = '48px';
                    icon.style.borderRadius = '8px';
                    icon.style.objectFit = 'cover';
                    icon.style.marginRight = '16px';

                    const title = document.createElement('h3');
                    title.textContent = project.title;
                    title.style.margin = '0';
                    title.style.fontSize = '1.2em';
                    title.style.color = '#fff';

                    topRow.appendChild(icon);
                    topRow.appendChild(title);

                    // Bottom: project description and link
                    const bottom = document.createElement('div');
                    bottom.style.marginTop = '12px';

                    const overview = document.createElement('p');
                    overview.textContent = project.description || '';
                    overview.style.margin = '0 0 8px 0';
                    overview.style.fontSize = '0.95em';
                    overview.style.color = '#ccc';
                    overview.style.height = '40px';
                    overview.style.overflow = 'hidden';
                    overview.style.textOverflow = 'ellipsis';

                    const link = document.createElement('a');
                    link.href = `https://modrinth.com/project/${project.slug}`;
                    link.textContent = 'View on Modrinth';
                    link.target = '_blank';
                    link.style.display = 'inline-block';
                    link.style.color = '#00e676';
                    link.style.textDecoration = 'none';
                    link.style.fontWeight = 'bold';

                    bottom.appendChild(overview);
                    bottom.appendChild(link);

                    item.appendChild(topRow);
                    item.appendChild(bottom);
                    carouselTrack.appendChild(item);
                });
            })
            // Show error message if fetch fails
            .catch(() => {
                carouselTrack.innerHTML = '<p style="color:red">Failed to load projects from Modrinth.</p>';
            });
    }
});