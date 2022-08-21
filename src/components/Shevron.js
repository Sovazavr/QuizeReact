

export const Shevron = ({id}) => {
    switch (id) {
        case 'shevron':

            return (
                <svg width="20" height="26" viewBox="0 0 6 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5.00003 1.25L0.610025 5.74C0.574936 5.7736 0.547012 5.81396 0.527935 5.85865C0.508858 5.90333 0.499023 5.95141 0.499023 6C0.499023 6.04859 0.508858 6.09667 0.527935 6.14135C0.547012 6.18604 0.574936 6.2264 0.610025 6.26L5.00003 10.75" stroke="#6A5BE2" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
            )

        default:
            break;
    }
}