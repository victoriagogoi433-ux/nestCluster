function toggleVertical(id) {
            const content = document.getElementById(`content-${id}`);
            const arrow = document.getElementById(`arrow-${id}`);
            content.classList.toggle('hidden');
            arrow.classList.toggle('rotate-180');}
            