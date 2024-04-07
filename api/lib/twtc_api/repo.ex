defmodule TwtcApi.Repo do
  use Ecto.Repo,
    otp_app: :twtc_api,
    adapter: Ecto.Adapters.Postgres
end
