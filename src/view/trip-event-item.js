export const createTripEventItemTemplate = (slot) => {
  return `
    <li class="trip-events__item">
      ${slot}
    </li>
  `;
};
