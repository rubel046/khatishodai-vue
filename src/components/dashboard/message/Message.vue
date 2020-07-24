<template>
    <v-app>
        <div class="message-section">

            <h2 class="text-center">Message</h2>

            <div class="msg-table card">
                <table class="table card-body table-striped">
                    <thead class="text-white bg-dark">
                    <tr>
                        <th>SI</th>
                        <th>From</th>
                        <th>Subject</th>
                        <th><select name="" id="" class="form-control">
                            <option value="">Recived</option>
                            <option value="">Send</option>
                        </select></th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>1</td>
                        <td>Khatisodai</td>
                        <td>Your Payment Is Confirmed</td>
                        <td>23 Jully</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Khatisodai</td>
                        <td>Your Payment Is Confirmed</td>
                        <td>23 Jully</td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>Khatisodai</td>
                        <td>Your Payment Is Confirmed</td>
                        <td>23 Jully</td>
                    </tr>
                    <tr>
                        <td>4</td>
                        <td>Khatisodai</td>
                        <td>Your Payment Is Confirmed</td>
                        <td>23 Jully</td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </v-app>
</template>

<script>
    export default {
        name: 'Dashboard',

        data: () => ({}),
    }
</script>
