Rails.application.routes.draw do

namespace :api do
  resources :posts
end

namespace :api do
  resources :form_responses
end

end
