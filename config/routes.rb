Rails.application.routes.draw do
  scope :api do
    scope :v1 do
      # get "/ordered-prompts", to: "prompts#ordered"
      # get "/most-stories", to: "posts#most_stories"
      # post "/auth/:provider/callback", to: "sessions#omniauth"
      # get "/prompts/:id", to: "prompts#show"

      resources :users, only: [:update, :destroy]
      post "/signup", to: "users#create"
      get "/me", to: "users#show"
      post "/login", to: "sessions#create"
      delete "/logout", to: "sessions#destroy"
      delete "/delete", to: "users#destroy"
      get "/user/:id/stories", to: "users#index"
      
      resources :stories, only: [:index]
      
      get "/prompts/:id/stories", to: "stories#index"
      resources :prompts, only: [:index, :create]
      get "/prompts/:id", to: "prompts#show"
        resources :stories, shallow: true
    end
  end
end
