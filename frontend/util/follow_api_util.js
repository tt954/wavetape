export const follow = userId => (
  $.ajax({
    method: 'POST',
    url: `/api/users/${userId}/follow`,
    userId
  })
);

export const unfollow = userId => (
  $.ajax({
    method: 'DELETE',
    url: `/api/users/${userId}/follow`,
    userId
  })
);
