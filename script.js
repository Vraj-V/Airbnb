function scrollIcons(direction) {
    const iconSection = document.getElementById('iconSection');
    const scrollAmount = iconSection.clientWidth; // Scroll by the width of the container
    iconSection.scrollBy({
        left: direction * scrollAmount,
        behavior: 'smooth'
    });
}