Rails.application.routes.draw do

namespace :api do
  resources :blogs do
    resources :posts
  end
end

namespace :api do
  resources :form_responses
end

end
