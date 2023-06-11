// listen for the DOMContentLoaded event, then call init()
window.addEventListener('DOMContentLoaded', init);

const menuButton = document.querySelector('.index-menu-button');
const menu = document.querySelector('.index-menu');
const dropdown = document.getElementById('Language');

/**
 * clears local storage of FutureNowState item and creates a new states for future
 */
async function init() {
    try {
        // Clear global state
        localStorage.removeItem('FutureNowState');

        // Set clean new states
        localStorage.setItem(
            'FutureNowState',
            JSON.stringify({
                TarotState: {
                    selectedCards: [],
                    isSelectingCard: false,
                },
                EightBallState: {},
            })
        );

        menuButton.addEventListener('click', () => {
            menu.classList.toggle('index-menu-open');
        });

        window.addEventListener('click', (event) => {
            if (
                !menu.contains(event.target) &&
                !menuButton.contains(event.target)
            ) {
                menu.classList.remove('index-menu-open');
            }
        });

        dropdown.addEventListener('change', (event) => {
            const selectedValue = dropdown.value;
            localStorage.setItem('language', selectedValue);
        });
    } catch (error) {
        console.error('An error occurred while initializing:', error);
    }
}

if (performance.getEntriesByType('navigation')[0].type === 'reload') {
    menu.classList.remove('index-menu-open');
}
